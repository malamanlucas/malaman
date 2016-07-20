package web;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.xml.bind.JAXBException;

import org.apache.commons.io.FileUtils;
import org.junit.Test;

import br.com.comum.converters.ConverterCollections;
import br.com.comum.file.ResourceLoader;
import br.com.model.entities.manager.Item;
import br.com.web.converters.IngredienteConverter;

public class TestIngredienteConverter {

	@Test
	public void test() throws IOException, JAXBException {
		
		File f = new File( ResourceLoader.loadURL("itens.txt").getFile() );
		String itensXml = FileUtils.readFileToString(f);
		
		List<Item> itens = IngredienteConverter.convert(itensXml);
		
		String text = ConverterCollections.forString( itens );
		System.out.println(text);
		
	}
	
}
