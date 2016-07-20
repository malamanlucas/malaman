package br.com.model.entities.manager;

import com.google.common.base.Strings;

public class TextHome {
	
	private Integer id = 1;
	private String title;
	private String body;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public String getBodyForWEB() {
		return Strings.isNullOrEmpty(body) ? "" : body.replaceAll("(\r\n|\n)", "<br />");
	}
	public Integer getId() {
		return id;
	}
	
	public String toString() {
		return "TextHome [id=" + id + ", title=" + title + ", body=" + body + "]";
	}
	
}
