
CREATE TABLE dicionario (
	id        INTEGER     NOT NULL,
	idioma    VARCHAR(20) NOT NULL,
	definicao TEXT        NOT NULL,
	existe    boolean     NOT NULL DEFAULT FALSE
);

CREATE TABLE livro (
	id         INTEGER     NOT NULL,
	nome       VARCHAR(30) NOT NULL,
	testamento VARCHAR(30) NOT NULL,
	ordem      INTEGER     NOT NULL,
	abreviacao VARCHAR(4)  NOT NULL
);

CREATE TABLE capitulo (
	id       INTEGER NOT NULL,
	livro_id INTEGER NOT NULL,
	titulo   TEXT
);

CREATE TABLE message (
	id    INTEGER NOT NULL,
	title TEXT    NOT NULL,
	texto TEXT    NOT NULL	
);

CREATE TABLE versiculo (
	id          INTEGER NOT NULL,
	capitulo_id INTEGER NOT NULL,
	livro_id    INTEGER NOT NULL,
	texto       TEXT    NOT NULL,
	idioma      VARCHAR(20) NOT NULL,
	numero      INTEGER NOT NULL,     
	formatado   TEXT    NOT NULL,
	limpo       TEXT    NOT NULL,
	qtd_aumento INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE expressao (
	expressao_id INTEGER NOT NULL,
	versiculo_id INTEGER NOT NULL,
	capitulo_id  INTEGER NOT NULL,
	livro_id     INTEGER NOT NULL,
	inicio       INTEGER NOT NULL,
	fim          INTEGER NOT NULL,
	texto        TEXT    NOT NULL,
	descricao    TEXT
);

CREATE TABLE expressao_dicionario (
	id           INTEGER NOT NULL,
	idioma       VARCHAR(20) NOT NULL,
	expressao_id INTEGER NOT NULL,
	versiculo_id INTEGER NOT NULL,
	capitulo_id  INTEGER NOT NULL,
	livro_id     INTEGER NOT NULL
);

CREATE TABLE expressao_mapa (
	id           INTEGER NOT NULL,
	expressao_id INTEGER NOT NULL,
	versiculo_id INTEGER NOT NULL,
	capitulo_id  INTEGER NOT NULL,
	livro_id     INTEGER NOT NULL
);

CREATE TABLE mapa (
	id      INTEGER NOT NULL,
	nome    TEXT NOT NULL
);

ALTER TABLE message ADD CONSTRAINT message_pk PRIMARY KEY(id);

ALTER TABLE livro ADD CONSTRAINT livro_pk PRIMARY KEY(id);
ALTER TABLE livro ADD CONSTRAINT livro_unique UNIQUE(nome);
ALTER TABLE dicionario ADD CONSTRAINT dicionario_pk PRIMARY KEY(id, idioma);

ALTER TABLE capitulo ADD CONSTRAINT capitulo_pk PRIMARY KEY(id, livro_id);
ALTER TABLE capitulo ADD CONSTRAINT capitulo_livro_pk FOREIGN KEY(livro_id) REFERENCES livro(id) ON DELETE CASCADE;

ALTER TABLE versiculo ADD CONSTRAINT versiculo_pk PRIMARY KEY(id, capitulo_id, livro_id);
ALTER TABLE versiculo ADD CONSTRAINT versiculo_capitulo_pk FOREIGN KEY(capitulo_id, livro_id) REFERENCES capitulo(id, livro_id) ON DELETE CASCADE;

ALTER TABLE expressao ADD CONSTRAINT expressao_pk PRIMARY KEY(expressao_id, versiculo_id, capitulo_id, livro_id);
ALTER TABLE expressao ADD CONSTRAINT expressao_versiculo_fk_ FOREIGN KEY(versiculo_id, capitulo_id, livro_id) REFERENCES versiculo(id, capitulo_id, livro_id);

ALTER TABLE expressao_dicionario ADD CONSTRAINT expressao_dicionario_pk PRIMARY KEY(id, idioma, expressao_id, versiculo_id, capitulo_id, livro_id);
ALTER TABLE expressao_dicionario ADD constraint expressao_dicionario_expressao_fk FOREIGN KEY(expressao_id, versiculo_id, capitulo_id, livro_id) 
	REFERENCES expressao(expressao_id, versiculo_id, capitulo_id, livro_id) ON DELETE CASCADE;
ALTER TABLE expressao_dicionario ADD CONSTRAINT expressao_dicionario_fk FOREIGN KEY(id, idioma) REFERENCES dicionario(id, idioma) ON DELETE CASCADE;

ALTER TABLE mapa ADD CONSTRAINT mapa_pk PRIMARY KEY(id);

ALTER TABLE expressao_mapa ADD CONSTRAINT expressao_mapa_pk PRIMARY KEY(id, expressao_id, versiculo_id, capitulo_id, livro_id);
ALTER TABLE expressao_mapa ADD CONSTRAINT expressao_mapa_expressao FOREIGN KEY(expressao_id, versiculo_id, capitulo_id, livro_id) 
	REFERENCES expressao(expressao_id, versiculo_id, capitulo_id, livro_id) ON DELETE CASCADE;
ALTER TABLE expressao_mapa ADD CONSTRAINT expressao_mapa_fk FOREIGN KEY(id) REFERENCES mapa(id) ON DELETE CASCADE;

/*
CREATE TABLE usuario (
	id         INTEGER     NOT NULL,
	login      VARCHAR(40) NOT NULL,
	senha      VARCHAR(40) NOT NULL,
	telefone   VARCHAR(9)  NOT NULL,
	email      VARCHAR(90) NOT NULL,
	confiavel  BOOLEAN     NOT NULL DEFAULT true,
	habilitado BOOLEAN     NOT NULL DEFAULT true
);*/

/* CREATE TABLE endereco (
	id          INTEGER      NOT NULL,
	usuario_id  INTEGER      NOT NULL,
	logradouro  VARCHAR(250) NOT NULL,
	bairro      VARCHAR(100) NOT NULL,
	numero      VARCHAR(10)  NOT NULL,
	complemento TEXT         NOT NULL
); */

/*
CREATE TABLE usuario_papel (
	papel      VARCHAR(20) NOT NULL,
	usuario_id INTEGER     NOT NULL
);

CREATE TABLE item (
	id       INTEGER          NOT NULL,
	nome     VARCHAR(70)      NOT NULL,
	preco    DOUBLE PRECISION NOT NULL,
	foto    BYTEA
);

CREATE TABLE categoria (
	id        INTEGER      NOT NULL,
	nome      VARCHAR(60)  NOT NULL,
	descricao VARCHAR(250) NOT NULL,
	tipo      VARCHAR(60)  NOT NULL,
	foto	  BYTEA
);

CREATE TABLE produto (
	id           INTEGER          NOT NULL,
	nome         VARCHAR(70)      NOT NULL,
	preco        DOUBLE PRECISION NOT NULL,
	tipo         VARCHAR(20)      NOT NULL,
	categoria_id INT              NOT NULL,
	habilitado   BOOLEAN          NOT NULL DEFAULT TRUE,
	destaque     BOOLEAN          NOT NULL DEFAULT FALSE,
	descricao    TEXT,
	foto         BYTEA
);

CREATE TABLE item_detalhe (
	item_id    INTEGER NOT NULL,
	produto_id INTEGER NOT NULL,
	qtd        INTEGER NOT NULL,
	qtd_max    INTEGER NOT NULL
);

CREATE TABLE carousel (
	id     INTEGER NOT NULL,
	ordem  INTEGER NOT NULL,
	titulo TEXT NOT NULL,
	corpo  TEXT NOT NULL,
	foto   BYTEA
);

CREATE TABLE text_home (
	id INT NOT NULL,
	texto TEXT,
	foto BYTEA
); */


