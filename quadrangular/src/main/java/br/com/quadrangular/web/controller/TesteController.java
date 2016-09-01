package br.com.quadrangular.web.controller;


import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RestController;

import net.bootsfaces.component.tree.model.DefaultNodeImpl;
import net.bootsfaces.component.tree.model.Node;

@RestController("teste")
@Scope("view")
public class TesteController {

	public Node createNode() {
		Node n = new DefaultNodeImpl( "Pastor da Capela" );
//		List<Node> childs = n.getChilds();
//		childs.add( node("Evangelista A").filhos("Assessor do Evangelista A 1","Assessor do Evangelista A 2") );
//		childs.add( node("Evangelista B").filhos("Assessor do Evangelista B 1","Assessor do Evangelista B 2") );
//		childs.add( node("Líder da Rede A").filhos( "Líder de Célula da Rede A" ) );
//		childs.add( node("Líder da Rede B").filhos( "Líder de Célula da Rede B" ) );
//		
//		Membro node1 = node( "1 Texto Grande Gigante Teste" );
//		Membro node2 = node( "2 Texto Grande Gigante Teste" );
//		Membro node3 = node( "3 Texto Grande Gigante Teste" );
//		Membro node4 = node( "4 Texto Grande Gigante Teste" );
//		Membro node5 = node( "5 Texto Grande Gigante Teste" );
//		Membro node6 = node( "6 Texto Grande Gigante Teste" );
//		
//		node1.filhos( node2 );
//		node2.filhos( node3 );
//		node3.filhos( node4 );
//		node4.filhos( node5 );
//		node5.filhos( node6 );
//		
//		childs.add( node("Escola Bíblica").filhos( "Lucas Malaman de Oliveira", "Luiz Guilherme Vicente", "Telan Paiva", "Bruno Massarola") );
//		childs.add( node1 );
		return n;
	}

	private static Membro node(String name) {
		return new Membro(name);
	}
	
	static class Membro extends DefaultNodeImpl {
		
		public Membro(String name) {
			super(name);
		}
		
		public Membro filhos(String...names) {
			List<Node> childs = getChilds();
			
			for (String name : names) {
				childs.add( node(name) );
			}
			
			return this;
		}
		
		public Membro filhos(Membro...membros) {
			List<Node> childs = getChilds();
			
			for (Membro m : membros) {
				childs.add( m );
			}
			
			return this;
		}
		
	}
	
}