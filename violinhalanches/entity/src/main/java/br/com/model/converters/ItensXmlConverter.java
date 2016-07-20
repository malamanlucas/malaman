package br.com.model.converters;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class ItensXmlConverter {
	
	public String convertToString(Document d) {
		StringBuffer s = new StringBuffer("");
		NodeList list = d.getDocumentElement().getElementsByTagName("item");
		int tm = list.getLength();
		for(int i=0,contItem=0;i < tm;i++) {
			Object o = list.item(i);
			if (o instanceof Element) {
				Element e = (Element) o;
				int qtd = Integer.valueOf(e.getAttribute("qtd"));
				if (qtd > 0) {
					s.append( (qtd>1?qtd:"") + e.getAttribute("nome")+", ");
				}
				contItem++;
			}
		}
		return formatCorrectly(s);
	}
	
	private String formatCorrectly(StringBuffer s) {
		int pos = s.lastIndexOf(",");
		s.replace(pos, pos+1, ".");
		pos = s.lastIndexOf(",");
		if (pos != -1) {
			s.replace(pos, pos+1, " e");
		}
		return s.toString().trim();
	}
}
	
