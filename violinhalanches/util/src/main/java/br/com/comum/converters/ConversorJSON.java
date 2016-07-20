package br.com.comum.converters;

import java.io.IOException;
import java.io.StringWriter;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

public class ConversorJSON {

	public static <T> T convertToObject(String json, Class<T> clazz) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			return mapper.readValue(json.getBytes(), clazz);
		} catch (IOException e) {
			throw new RuntimeException( e );
		}
	}

	public static <T> List<T> convertToList(String json, Class<T> clazz) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			return mapper.readValue(json.getBytes("UTF-8"), mapper.getTypeFactory().constructCollectionType(List.class, clazz));
		} catch (IOException e) {
			throw new RuntimeException( e );
		}
	}

	public static String convertToString(Object o) {
		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(SerializationFeature.INDENT_OUTPUT, false);
		StringWriter stringWriter = new StringWriter();
		try {
			mapper.writeValue(stringWriter, o);
			return stringWriter.toString();
		} catch (IOException e) {
			throw new RuntimeException( e );
		}
	}
	
}
