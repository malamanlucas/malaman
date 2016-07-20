package br.com.core.email;

import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.commons.io.IOUtils;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Component;
import org.springframework.ui.velocity.VelocityEngineUtils;

import br.com.model.entities.Attachment;

@Component("emailSender")
public class VelocityEmailSender {

	public final VelocityEngine velocityEngine;
	private final JavaMailSender mailSender;

	/**
	 * Constructor
	 */
	@Autowired
	public VelocityEmailSender(VelocityEngine velocityEngine,
			JavaMailSender mailSender) {
		this.velocityEngine = velocityEngine;
		this.mailSender = mailSender;
	}

	public void send(final SimpleMailMessage msg, final Map<String, Object> map, final String template) {
		MimeMessagePreparator preparator = new MimeMessagePreparator() {
			public void prepare(MimeMessage mimeMessage) throws Exception {
				buildMimeMessageHelperDefault(msg, map, template, mimeMessage, false);
			}
		};

		send(preparator, msg);
	}
	
	public void sendWithAttchments(final SimpleMailMessage msg, final Map<String, Object> map, final String template, final Attachment... attchments) {
		MimeMessagePreparator preparator = new MimeMessagePreparator() {
			public void prepare(MimeMessage mimeMessage) throws Exception {
				MimeMessageHelper helper = buildMimeMessageHelperDefault(msg, map, template, mimeMessage, true);
				for (final Attachment attch : attchments) {
					
					byte[] content = IOUtils.toByteArray( attch.getInputStream() );
					helper.addAttachment(attch.getName(), new ByteArrayResource( content ));
				}
			}
		};

		send(preparator, msg);
	}
	
	private MimeMessageHelper buildMimeMessageHelperDefault(SimpleMailMessage msg, Map<String, Object> map, String template, MimeMessage mimeMessage, boolean isMultiPart) throws MessagingException {
		MimeMessageHelper message = new MimeMessageHelper(mimeMessage, isMultiPart, "UTF-8");
		message.setTo(msg.getTo());
		message.setFrom(msg.getFrom());
		message.setSubject(msg.getSubject());
		
		String body = VelocityEngineUtils.mergeTemplateIntoString(velocityEngine, template, "UTF-8", map);

		message.setText(body, true);
		
		return message;
	}
	
	private void send(MimeMessagePreparator preparator, SimpleMailMessage msg) {
		try {
			mailSender.send(preparator);
		} catch (Throwable e) {
			throw e;
//			throw new RuntimeException( "Falha ao enviar email para: "+msg.getTo()[0]+" <!-- Detalhes Técnico: "+e.getMessage() + " -->" );
		}
		
	}
}
