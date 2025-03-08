CREATE TABLE Usuarios (
    idUsuario SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    tipoUsuario TEXT NOT NULL CHECK (tipoUsuario IN ('comum', 'administrador'))
);


CREATE TABLE Projetos (
    idProjeto SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    descricao TEXT,
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    responsavelId INTEGER NOT NULL,
    FOREIGN KEY (responsavelId) REFERENCES Usuarios(idUsuario) ON DELETE CASCADE
);


CREATE TABLE Impressoes (
    idImpressao SERIAL PRIMARY KEY,
    dataImpressao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status TEXT CHECK (status IN ('Em andamento', 'Concluído', 'Erro')) NOT NULL,
    descricao TEXT,
    projetoId INTEGER NOT NULL,
    FOREIGN KEY (projetoId) REFERENCES Projetos(idProjeto) ON DELETE CASCADE
);


CREATE TABLE Notificacoes (
    idNotificacao SERIAL PRIMARY KEY,
    mensagem TEXT NOT NULL,
    tipoNotificacao TEXT CHECK (tipoNotificacao IN ('Sucesso', 'Erro')),
    lida BOOLEAN DEFAULT FALSE
);


CREATE TABLE Estoque (
    idEstoque SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    material TEXT NOT NULL,
    quantidade INTEGER NOT NULL CHECK (quantidade >= 0)
);

-- inserindo dados para exemplos

INSERT INTO Usuarios (nome, email, senha, tipoUsuario) VALUES
('Arnaldo Filho', 'arnaldo@email.com', 'senha123', 'administrador'),
('Gustavo Abreu', 'gustavo@email.com', 'senha456', 'comum'),
('Olavo Levir', 'levir@email.com', 'senha999', 'comum');

INSERT INTO Projetos (nome, descricao, responsavelId) VALUES
('Projeto Impressão 3D', 'Desenvolvimento de peças personalizadas', 1),
('Protótipo Engenharia', 'Criação de protótipos para estudo', 2);

INSERT INTO Impressoes (status, descricao, projetoId) VALUES
('Concluído', 'Peça finalizada com sucesso', 2),
('Erro', 'Falha na impressão devido a falta de filamento', 1);

INSERT INTO Estoque (nome, material, quantidade) VALUES
('Filamento PLA', 'PLA', 10);