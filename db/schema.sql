CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger(
	id int NOT NULL AUTO_INCREMENT,
	burger_type varchar(255) NOT NULL,
	devoured TINYINT(1) DEFAULT 0,
	date timestamp DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);