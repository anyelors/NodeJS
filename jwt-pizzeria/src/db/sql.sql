-- Base de datos de usuarios
CREATE DATABASE usuariosdb;
USE usuariosdb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  role ENUM('admin', 'user', 'vip') NOT NULL DEFAULT 'user'
);

SELECT * FROM usuariosdb.users;

-- Base de datos del negocio
CREATE DATABASE negociodb;
USE negociodb;

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  precio DECIMAL(10, 2)
);

CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  producto_id INT,
  cantidad INT,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO productos (nombre, precio) VALUES
('Pizza Margarita', 8.50),
('Pizza Pepperoni', 9.50),
('Pizza Vegetariana', 9.00);

SELECT * FROM negociodb.productos;

SELECT * FROM negociodb.pedidos;