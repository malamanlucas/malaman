package br.com.comum.converters;

import java.io.StringReader;
import java.io.StringWriter;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.bind.annotation.adapters.XmlAdapter;

public class ConversorJAXB {

	public static String objectToStringXML(Object obj) {
		try {
			JAXBContext context = JAXBContext.newInstance(obj.getClass());
			StringWriter writer = new StringWriter();
			Marshaller m = context.createMarshaller();
			m.marshal(obj, writer);
			return writer.toString();
		} catch (Exception e) {
			throw new RuntimeException( e.getMessage() );
		}
	}

	@SuppressWarnings("unchecked")
	public static <T> T stringXMLToObject(String xml, Class<T> clazz) {
		try {
			JAXBContext context = JAXBContext.newInstance(clazz);
			Unmarshaller m = context.createUnmarshaller();
			return (T) m.unmarshal(new StringReader(xml));
		} catch (Exception e) {
			throw new RuntimeException( e.getMessage() );
		}
	}
	
	@SuppressWarnings("rawtypes")
	public static Object stringXMLToObject(String xml, Class clazz, XmlAdapter<?,?> adapter) {
		try {
			JAXBContext context = JAXBContext.newInstance(clazz);
			Unmarshaller m = context.createUnmarshaller();
			m.setAdapter(adapter);
			return m.unmarshal(new StringReader(xml));
		} catch (Exception e) {
			throw new RuntimeException( e.getMessage() );
		}
	}

}
 