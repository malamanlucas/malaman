
CREATE TABLE usuario (
	id               SERIAL       NOT NULL,
	telefone         VARCHAR(15)  NOT NULL,
	nome             VARCHAR(100) NOT NULL,
	senha            VARCHAR(40)  NOT NULL,
	email            VARCHAR(100) NOT NULL,
	confiavel        BOOLEAN      NOT NULL DEFAULT true,
	habilitado       BOOLEAN      NOT NULL DEFAULT true,
	qt_pago          INT          NOT NULL DEFAULT 0,
	qt_nao_pago      INT          NOT NULL DEFAULT 0,
	qt_pedido        INT          NOT NULL DEFAULT 0
);

CREATE TABLE usuario_papel (
	papel   VARCHAR(20) NOT NULL,
	usuario INT         NOT NULL
);

CREATE TABLE endereco (
	id          SERIAL       NOT NULL,
	usuario     int          NOT NULL,
	logradouro  VARCHAR(100) NOT NULL,
	nro         VARCHAR(8)   NOT NULL,
	bairro      VARCHAR(40)  NOT NULL,
	cep         VARCHAR(8)   NOT NULL,
	complemento TEXT
);

CREATE TABLE categoria (
	id        SERIAL       NOT NULL,
	nome      VARCHAR(60)  NOT NULL,
	descricao VARCHAR(250) NOT NULL,
	tipo      INT          NOT NULL,
	foto	  BYTEA
);

CREATE TABLE produto (
	id         SERIAL            NOT NULL,
	nome       VARCHAR(60)       NOT NULL,
	valor      DOUBLE PRECISION  NOT NULL,
	tipo       INT               NOT NULL,
	categoria  INT               NOT NULL,
	habilitado BOOLEAN           NOT NULL DEFAULT TRUE,
	descricao  TEXT,
	foto       BYTEA
);

CREATE TABLE carousel (
	id   SERIAL NOT NULL,
	foto BYTEA
);

CREATE TABLE item (
	id       SERIAL           NOT NULL,
	nome     VARCHAR(70)      NOT NULL,
	v_padrao DOUBLE PRECISION NOT NULL,
	foto     BYTEA
);

CREATE TABLE item_produto (
	item        INT              NOT NULL,
	produto     INT              NOT NULL,
	qtd         INT         NOT NULL,
	qtd_max     INT         NOT NULL,
	valor       DOUBLE PRECISION NOT NULL
);

CREATE TABLE novidade (
	produto INT NOT NULL
);

CREATE TABLE status_geral (
	id             INT PRIMARY KEY,
	venda_aberta   BOOLEAN,
	loja_aberta    BOOLEAN,
	operador_ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE pedido (
	id                  BIGSERIAL,
	dt_hora_emissao     TIMESTAMP without time zone,
	dt_hora_last_status TIMESTAMP without time zone,
	preco               DOUBLE PRECISION NOT NULL,
	troco               DOUBLE PRECISION         ,
	preco_entrega       DOUBLE PRECISION         ,
	itens               TEXT             NOT NULL,
	status_pedido       INT              NOT NULL,
	status_pagamento    INT              NOT NULL,
	user_logged         varchar(15)      NOT NULL,
	pagamento           INT              NOT NULL,
	recebimento         INT              NOT NULL,
	endereco            TEXT                     ,
	carregado_dashboard boolean          NOT NULL,
	url_pagamento       TEXT                     ,
	entregar            boolean          NOT NULL DEFAULT FALSE
);

CREATE TABLE meio_pagamento (
	id INT NOT NULL,
	habilitado BOOLEAN NOT NULL DEFAULT TRUE,
	descricao VARCHAR(100)
);

CREATE TABLE meio_recebimento (
	id INT NOT NULL,
	habilitado BOOLEAN NOT NULL DEFAULT TRUE,
	descricao VARCHAR(100)
);

CREATE TABLE texto_home (
	id     INT       PRIMARY KEY,
	titulo TEXT      DEFAULT 'TITULO DEFAULT',
	corpo  TEXT      DEFAULT 'CORPO',
	rodape TEXT      DEFAULT 'RODAPE'
);

CREATE TABLE parametro (
	chave varchar(80) NOT NULL PRIMARY KEY,
	valor varchar(100) NOT NULL
);

create function atualiza_data_user() returns trigger as
$$
begin
	IF     OLD.status_pagamento = 1 OR OLD.status_pagamento = 2 THEN
		return new;
	ELSEIF     NEW.status_pagamento = 1 THEN  /* PAGO */
		UPDATE usuario SET qt_pago=qt_pago+1 WHERE telefone = OLD.user_logged;
		UPDATE usuario SET confiavel=true 
			   WHERE qt_pago = cast((SELECT valor FROM parametro WHERE chave = 'qtd_confiavel') as int)
			   AND telefone = OLD.user_logged;
	ELSEIF NEW.status_pagamento = 2 THEN /* CANCELADO */
		UPDATE usuario SET qt_nao_pago=qt_nao_pago+1 WHERE telefone = OLD.user_logged;
	END IF;
	return new;
end;
$$ language 'plpgsql';

CREATE TRIGGER atualiza_data_user_trigger
  AFTER UPDATE ON pedido
  FOR EACH ROW EXECUTE PROCEDURE atualiza_data_user();

create function atualiza_qtd_pedido_user() returns trigger as
$$
begin
	UPDATE usuario SET qt_pedido=qt_pedido+1 WHERE telefone = NEW.user_logged;
	return new;
end;
$$ language 'plpgsql';

CREATE TRIGGER atualiza_qtd_pedido_user_trigger
  AFTER INSERT ON pedido
  FOR EACH ROW EXECUTE PROCEDURE atualiza_qtd_pedido_user();



  