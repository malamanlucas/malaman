package br.com.web.taglibs;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.PageContext;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;

import br.com.comum.constantes.Constantes;

public class TagHandleError extends SimpleTagSupport {

	private static final long serialVersionUID = 1L;
	
	private static final String UL_END = "</ul>";

	private static final String LI_END = "</li>";

	private static final String LI_START = "<li>";

	private static final String UL_START = "<ul class=\"txt10\">";

	private static final String ATTRIBUTE_STARTS = "org.springframework.validation.BindingResult.";;

	private String objectName;

	@Override
	public void doTag() throws JspException, IOException {
		JspWriter out = getJspContext().getOut();
		out.write(UL_START);
		if (objectName == null) {
			Object error = getJspContext()
							.getAttribute(Constantes.ERRO_GENERICO,PageContext.REQUEST_SCOPE);
			if (error != null) {
				if (error instanceof BindingResult) {
					for (ObjectError e : ((BindingResult)error).getAllErrors()) {
						out.write(LI_START +e.getDefaultMessage()+ LI_END);
					}
				} else {
					out.write(LI_START +error+ LI_END);
				}
			}
		} else {
			BindingResult r = (BindingResult) getJspContext().getAttribute(
					ATTRIBUTE_STARTS + getObjectName(), PageContext.REQUEST_SCOPE);
			for (ObjectError e : r.getAllErrors()) {
				out.write(LI_START + e.getDefaultMessage() + LI_END);
			}
		}
		out.write(UL_END);
	}

	public String getObjectName() {
		return objectName;
	}

	public void setObjectName(String objectName) {
		this.objectName = objectName;
	}
}
