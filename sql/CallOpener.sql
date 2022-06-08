CREATE TABLE Cliente (
    email VARCHAR(255),
    nome VARCHAR(255),
    senha VARCHAR(255),
	PRIMARY KEY (email)
);

CREATE TABLE Tecnico (
    email VARCHAR(255),
    nome VARCHAR(255),
    funcao VARCHAR(255),
    senha VARCHAR(255),
	PRIMARY KEY (email)
);

CREATE TABLE Chamado (
    chamado_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    categoria VARCHAR(255),
    descricao VARCHAR(255),
    dataAbertura DATE,
    estado VARCHAR,
    fk_Cliente_email VARCHAR(255),
    fk_Tecnico_email VARCHAR(255),
    textoSolucao VARCHAR(255),
    dataConclusao DATE,
	FOREIGN KEY (fk_Cliente_email) REFERENCES Cliente (email)
		ON DELETE SET NULL,
	FOREIGN KEY (fk_Tecnico_email) REFERENCES Tecnico (email)
		ON DELETE SET NULL
);
