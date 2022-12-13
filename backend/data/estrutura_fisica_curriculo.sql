BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Usuario" (
	"id_usuario"	INTEGER NOT NULL UNIQUE,
	"nome_usuario"	TEXT,
	"cargo_usuario"	TEXT,
	"endereco"	TEXT,
	"imagem"	TEXT,
	"telefone"	TEXT,
	"email"	TEXT,
	"biografia"	TEXT,
	PRIMARY KEY("id_usuario")
);
CREATE TABLE IF NOT EXISTS "Formacao" (
	"id_formacao"	INTEGER NOT NULL UNIQUE,
	"nome_curso"	TEXT,
	"ano_inicio_curso"	INTEGER,
	"ano_final_curso"	INTEGER,
	"descricao_curso"	TEXT,
	"id_usuario"	INTEGER,
	PRIMARY KEY("id_formacao" AUTOINCREMENT),
	FOREIGN KEY("id_usuario") REFERENCES "Usuario"("id_usuario")
);
CREATE TABLE IF NOT EXISTS "Experiencia" (
	"id_experiencia"	INTEGER NOT NULL UNIQUE,
	"nome_empresa"	TEXT,
	"ano_inicio_experiencia"	INTEGER,
	"ano_final_experiencia"	INTEGER,
	"nome_experiencia"	TEXT,
	"descricao"	TEXT,
	"id_usuario"	INTEGER,
	PRIMARY KEY("id_experiencia" AUTOINCREMENT),
	FOREIGN KEY("id_usuario") REFERENCES "Usuario"("id_usuario")
);
CREATE TABLE IF NOT EXISTS "Realizacoes" (
	"id_realizacao"	INTEGER NOT NULL UNIQUE,
	"nome_realizacao"	TEXT,
	"ano_realizacao"	INTEGER,
	"descricao_realizacao"	TEXT,
	"id_usuario"	INTEGER,
	PRIMARY KEY("id_realizacao" AUTOINCREMENT),
	FOREIGN KEY("id_usuario") REFERENCES "Usuario"("id_usuario")
);
CREATE TABLE IF NOT EXISTS "Habilidades" (
	"id_habilidade"	INTEGER NOT NULL UNIQUE,
	"nome_habilidade"	TEXT,
	"nivel_habilidade"	TEXT,
	"id_usuario"	INTEGER,
	PRIMARY KEY("id_habilidade" AUTOINCREMENT),
	FOREIGN KEY("id_usuario") REFERENCES "Usuario"("id_usuario")
);
CREATE TABLE IF NOT EXISTS "Personalidade" (
	"id_personalidade"	INTEGER NOT NULL UNIQUE,
	"nome_personalidade"	TEXT,
	"nivel_personalidade"	TEXT,
	"id_usuario"	INTEGER,
	PRIMARY KEY("id_personalidade" AUTOINCREMENT),
	FOREIGN KEY("id_usuario") REFERENCES "Usuario"("id_usuario")
);
COMMIT;
