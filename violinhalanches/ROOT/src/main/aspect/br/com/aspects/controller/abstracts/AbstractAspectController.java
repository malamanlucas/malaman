package br.com.aspects.controller.abstracts;

import java.lang.reflect.Method;

import org.aspectj.lang.JoinPoint;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;

import br.com.aspects.abstracts.AbstractAspect;
import br.com.aspects.controller.ControllersAdvices;
import br.com.comum.log.Loggable;
import br.com.model.interfaces.PhotoWrapper;
import br.com.web.annotations.FormError;
import br.com.web.annotations.Message;
import br.com.web.util.MessageUtils;
import br.com.web.util.SessionUtils;

public abstract class AbstractAspectController extends AbstractAspect {

	private static final String DELIVERED_METHOD_NAME = "carregarForm";

	private static Logger logger = LoggerFactory
			.getLogger(ControllersAdvices.class);

	protected void deliverMessageSucessful(Message message, JoinPoint jp) {
		if (message != null) {
			Model model = extractModel(jp.getArgs());
			MessageUtils.deliverSucess(model, message);
		}
	}

	protected void deliverMessageSuccessful(JoinPoint jp) {
		Message message = getMessageAnnotation(getCurrentMethod(jp));
		if (message != null) {
			Model model = extractModel(jp.getArgs());
			MessageUtils.deliverSucess(model, message);
		}
	}

	protected String deliverMessageError(Exception e, JoinPoint jp, Object result) {

		if (jp.getArgs()[0] instanceof PhotoWrapper) {
			return deliverMessageErrorUpload(e, jp);
		} else if (hasFormAnnotation(jp)) {
			return deliverMessageErrorAndObject(e, jp);
		} else {
			deliverMessageError(e, jp);
		}
		return (String) result;
	}

	private boolean hasFormAnnotation(JoinPoint jp) {
		return getFormAnnotation(getCurrentMethod(jp)) != null;
	}

	private String deliverMessageErrorAndObject(Exception e, JoinPoint jp) {
		Model model = (Model) jp.getArgs()[0];
		Object object = jp.getArgs()[1];

		FormError form = getFormAnnotation(getCurrentMethod(jp));

		MessageUtils.deliverError(model, e.getMessage());

		return deliverToInitialForm(jp, model, object, form.methodName());
	}

	private void deliverMessageError(Exception e, JoinPoint jp) {
		Model model = null;
		for (Object o : jp.getArgs()) {
			if (o instanceof Model) {
				model = (Model) o;
				break;
			}
		}
		String msg = e.getMessage();
		if (model != null) {
			MessageUtils.deliverError(model, msg);
		}
		if (e.getMessage() == null) {
			msg = "Ocorreu um erro";
		}
		logger.error(msg);
	}

	@SuppressWarnings("all")
	private String deliverMessageErrorUpload(Exception e, JoinPoint jp) {
		Model model = (Model) jp.getArgs()[1];
		PhotoWrapper photoWrapper = (PhotoWrapper) jp.getArgs()[0];

		if (e.getMessage() != null) {
			logger.error(e.getMessage());
			MessageUtils.deliverError(model, e.getMessage());
		}

		SessionUtils.setarImagemTemporaria(model, photoWrapper.getPhoto());
		return deliverToInitialForm(jp, model, photoWrapper,
				DELIVERED_METHOD_NAME);
	}

	protected String deliverToInitialForm(JoinPoint jp, Model model,
			Object object, String formName) {
		try {
			Object o = jp.getThis();
			Method iniciarForm = null;
			for (Method m : o.getClass().getDeclaredMethods()) {
				iniciarForm = getDeliveredMethod(m, formName);
				if (iniciarForm != null)
					break;
			}
			return (String) iniciarForm.invoke(o, model, object);
		} catch (Exception e) {
			System.out.println("ERRO ESTÁ FALTANDO METODO: " + formName);
			return null;
		}
	}

	protected Method getDeliveredMethod(Method m, String formName) {
		boolean isDeliveredMethod = m.getName().equals(formName);
		return isDeliveredMethod ? m : null;
	}

	protected Model extractModel(Object[] args) {
		for (Object object : args) {
			if (object instanceof Model) {
				return (Model) object;
			}
		}
		return null;
	}

	private Message getMessageAnnotation(Method m) {
		return (Message) getAnnotation(m, Message.class);
	}

	private FormError getFormAnnotation(Method m) {
		return (FormError) getAnnotation(m, FormError.class);
	}

	protected boolean isAnnonatedWithLoggable(JoinPoint jp) {
		return getAnnotation(getCurrentMethod(jp), Loggable.class) != null;
	}

}
