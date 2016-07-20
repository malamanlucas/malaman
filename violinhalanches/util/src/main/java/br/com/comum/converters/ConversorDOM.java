package br.com.comum.converters;

import java.io.StringReader;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

public class ConversorDOM {

	public static void main(String[] args) {
//		final String xmlStr = "<Emp id=\"1\"><name>Pankaj</name><age>25</age>\n"
//				+ "<role>Developer</role><gen>Male</gen></Emp>";
//		Document doc = convertStringToDocument(xmlStr);
//		System.out.println(convertDocumentToString(doc));
		
		String a = "<items><item xmlns=\"http://www.w3.org/1999/xhtml\" qtd=\"1\" nome=\"X-Tava Bom\" valor=\"0,00\" id=\"12\" qtd_max=\"2\"></item><item xmlns=\"http://www.w3.org/1999/xhtml\" qtd=\"1\" nome=\"deserto\" valor=\"0,00\" id=\"9\" qtd_max=\"2\"></item><item xmlns=\"http://www.w3.org/1999/xhtml\" qtd=\"1\" nome=\"aeae\" valor=\"0,00\" id=\"4\" qtd_max=\"2\"></item><item xmlns=\"http://www.w3.org/1999/xhtml\" qtd=\"1\" nome=\"ryeryer\" valor=\"0,00\" id=\"6\" qtd_max=\"1\"></item></items>";
		
		Document doc = stringToDocument(a);
		Element root = doc.getDocumentElement();
		NodeList elements = root.getElementsByTagName("item");
		long start = System.currentTimeMillis();
		for (int i = 0; i < elements.getLength(); i++) {
			showAllAttributes((Element) elements.item(i));
		}
		System.err.println(System.currentTimeMillis()-start);
	}
	
	public static void showAllAttributes(Element e) {
		int tm = e.getAttributes().getLength();
		for (int i = 0; i < tm; i++) {
			Attr attr = (Attr) e.getAttributes().item(i);
			System.out.println(attr.getName()+ ": "+attr.getValue());
		}
	}
	
	public static Map<String,Object> convertToMapAllFirstNodes(Document d) {
		Map<String,Object> map = new HashMap<String, Object>();
		NodeList elements = d.getDocumentElement().getChildNodes();
		int tm = elements.getLength();
		for (int i = 0; i < tm; i++) {
			Object o = elements.item(i);
			if (o instanceof Element) {
				map.put(((Element)o).getNodeName(), ((Element)o).getTextContent());
			}
		}
		return map;
	}

	public static String documentToString(Document doc) {
		TransformerFactory tffactory = TransformerFactory.newInstance();
		Transformer tf;
		try {
			tf = tffactory.newTransformer();
			tf.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "yes");
			StringWriter writer = new StringWriter();
			tf.transform(new DOMSource(doc), new StreamResult(writer));
			String output = writer.getBuffer().toString();
			return output;
		} catch (TransformerException e) {
			e.printStackTrace();
		}

		return null;
	}

	public static Document stringToDocument(String xmlStr) {
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder;
		try {
			builder = factory.newDocumentBuilder();
			Document doc = builder.parse(new InputSource(new StringReader(
					xmlStr)));
			return doc;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
