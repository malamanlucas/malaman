package br.com.web.inactivity;

import java.util.Calendar;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;

import org.springframework.messaging.simp.SimpMessagingTemplate;

import br.com.core.apps.system_status.SystemStatusApp;
import br.com.model.entities.manager.SystemStatus;
import br.com.web.util.WebSocketUtils;

public class CounterTimer extends Timer {

	private SimpMessagingTemplate template;
	public  SystemStatusApp       statusApp;

	public CounterTimer(SimpMessagingTemplate template, SystemStatusApp statusApp) {
		super();
		this.template  = template;
		this.statusApp = statusApp;
	}
	
	public void terminateCounter() {
		System.out.println("Operador não respondeu, tempo acabou... fechando as vendasç;8");
		setSaleAsClosed();
		cancel();
	}
	
	public static Date getEndDate(int minuts) {
		Calendar c = Calendar.getInstance();
		c.setTime( new Date() );
		c.add( Calendar.MINUTE, minuts );
		return c.getTime();
	}
	
	public void execute(final int minuts, final int minutsAnswer) {
		schedule(new TimerTask() {
			@Override
			public void run() {
				System.out.println("Tarefa iniciada com "+minuts+" de inatividade e "+minutsAnswer+" inatividade de resposta");
				template.convertAndSendToUser( "gestor", "/gestor/inactivity", "Você está aí?" );
				
				Date dateOver = getEndDate( minutsAnswer );
				
				try {
					while(true) {
						System.out.println("Checando...");
						SystemStatus status = statusApp.find();
						if ( new Date().after( dateOver ) || !status.isSaleOpened() ) {
							terminateCounter();
							return;
						} else if (status.isActiveOperator()) {
							System.out.println("Operador respondeu: setando-o como desativado");
							setOperatorAsDeactivate();
							break;
						}
						Thread.sleep(1000);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
				execute(minuts, minutsAnswer);
			}

		}, minuts*60*1000);
		System.out.println("Tarefa agendada para"+getEndDate(minuts));
	}
	
	protected void setOperatorAsDeactivate() {
		SystemStatus status = statusApp.find();
		status.setActiveOperator( false );
		statusApp.update(status);
	}

	protected void setSaleAsClosed() {
		SystemStatus status = statusApp.find();
		status.setSaleOpened( false );
		statusApp.update(status);
		WebSocketUtils.deliveryNewStatus( status, template );
	}

	
}
