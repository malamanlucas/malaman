ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY(id);
ALTER TABLE usuario ADD CONSTRAINT usuario_unique_username UNIQUE(login);
ALTER TABLE usuario ADD CONSTRAINT usuario_unique_telefone UNIQUE(telefone);

ALTER TABLE usuario_papel ADD CONSTRAINT usuario_papel_pk PRIMARY KEY(usuario_id, papel);
ALTER TABLE usuario_papel ADD CONSTRAINT up_fk_usuario FOREIGN KEY(usuario_id) REFERENCES usuario(id) ON DELETE CASCADE;

/* USUARIO ----------------------------------- */

ALTER TABLE item ADD CONSTRAINT item_pk PRIMARY KEY(id);
ALTER TABLE item ADD CONSTRAINT item_unique UNIQUE(nome);

ALTER TABLE produto ADD CONSTRAINT produto_pk PRIMARY KEY(id);
ALTER TABLE produto ADD CONSTRAINT produto_unique UNIQUE(nome, tipo);
ALTER TABLE produto ADD CONSTRAINT produto_categoria_fk FOREIGN KEY(categoria_id) REFERENCES produto(id) ON DELETE CASCADE;

ALTER TABLE item_detalhe ADD CONSTRAINT item_detalhe_pk PRIMARY KEY(item_id, produto_id);
ALTER TABLE item_detalhe ADD CONSTRAINT item_detalhe_item_fk FOREIGN KEY(item_id) REFERENCES item(id) ON DELETE CASCADE;
ALTER TABLE item_detalhe ADD CONSTRAINT item_detalhe_produto_pk FOREIGN KEY(produto_id) REFERENCES produto(id) ON DELETE CASCADE;

ALTER TABLE categoria ADD CONSTRAINT categoria_pk PRIMARY KEY(id);
ALTER TABLE categoria ADD CONSTRAINT categoria_unique UNIQUE(nome, tipo);

ALTER TABLE carousel ADD CONSTRAINT carousel_pk PRIMARY KEY(id);
ALTER TABLE carousel ADD CONSTRAINT carousel_unique_ordem UNIQUE(ordem);

ALTER TABLE text_home ADD CONSTRAINT text_home_pk PRIMARY KEY(id);
