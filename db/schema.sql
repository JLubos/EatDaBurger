DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50),
	devoured BOOLEAN,
	PRIMARY KEY (id)


);


INSERT INTO 
burgers (burger_name, devoured) 
VALUES
('Cheese Burger', TRUE),
('Krabby Patty', TRUE),
('Nasty Patty', FALSE);
