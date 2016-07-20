package br.com.core;

import java.text.Normalizer;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;


public class Main {

	static SimpleDateFormat fmt = new SimpleDateFormat( "hh:mm:ss" );
	
	static String getActualDate() {
		return fmt.format( new Date( ) );
	}
	
	public static void main(String[] args) {
		System.out.println( getActualDate() );
		final Timer timer = new Timer();
		timer.schedule(new TimerTask() {
			@Override
			public void run() {
				System.out.println( getActualDate() );
				System.out.println( fmt.format( new Date(scheduledExecutionTime()))  );
			}
		}, 5000);
		
		System.out.println("finish");
	}
	
	public static String removeAcentos(String string) {
	    if (string != null){
	        string = Normalizer.normalize(string, Normalizer.Form.NFD);
	        string = string.replaceAll("[^\\p{ASCII}]", "");
	    }
	    return string;
	}

	
}
