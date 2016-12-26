package br.com.biblia.web.controller;

import java.util.Map;

import javax.faces.context.FacesContext;
import javax.faces.event.PhaseId;

import org.primefaces.model.StreamedContent;

public abstract class ImageRetriever {

	public StreamedContent getImage() {

		FacesContext context = FacesContext.getCurrentInstance();
		
		if (context.getCurrentPhaseId() == PhaseId.RENDER_RESPONSE) {
			return ControllerUtils.getDefaultImage();
		}

		Map<String, String> map = context
										.getExternalContext()
										.getRequestParameterMap();
		String id = map.get("image_id");
		
		byte[] foto = retrieveBytes( Integer.valueOf(id) );
		if (foto == null) {
			return ControllerUtils.getDefaultImage();
		}
		return ControllerUtils.getImage( foto );
		
	}

	public abstract byte[] retrieveBytes(Integer id);
	
}
