package br.com.main;

import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Insets;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class MyFrame extends JFrame implements IBuildGUI {

	private static final long serialVersionUID = 1L;
	
	private static JLabel label = new JLabel( "ViolinhaLanches Impressor" );
	
	private static JButton botao = new JButton("Iniciar");

	public static void setTextLabel(String text) {
		label.setText( text );
	}
	
	public MyFrame() {
		buildGUI();
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setLocationRelativeTo(null);
		((JComponent) getContentPane()).setBorder(BorderFactory.createEmptyBorder(20,20, 20, 20));
		getContentPane().repaint();
		pack();
	}
	
	
	public static void main(String[] args) {
		new MyFrame();
	}


	@Override
	public void buildGUI() {
		
		setLayout( new GridBagLayout() );
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.anchor = GridBagConstraints.CENTER;
		gbc.insets = new Insets(0,10,0,0);
		gbc.gridx = 0;
		gbc.gridy = 0;
		
		add(label, gbc);
		
		
		gbc.gridx = 1;
		add(botao, gbc);
		
		buildStyle();
		buildActions();
	}

	@Override
	public void buildStyle() {
		
	}

	@Override
	public void buildActions() {
		botao.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				Main.start();
			}
		});
	}
	
}
