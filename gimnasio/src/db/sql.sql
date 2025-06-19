-- Usuarios
CREATE DATABASE IF NOT EXISTS usersdb;
USE usersdb;
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  role ENUM('admin','cliente') NOT NULL DEFAULT 'cliente'
);
INSERT INTO users (username, email, password, role) VALUES
('admin1','admin1@gym.com','$2b$10$hashdeejemplo...', 'admin'),
('cliente1','user1@gym.com','$2b$10$hashdeejemplo...', 'cliente');

-- Gimnasio
CREATE DATABASE IF NOT EXISTS gimnasio;
USE gimnasio;
CREATE TABLE IF NOT EXISTS clases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  horario VARCHAR(100),
  plazas INT
);
CREATE TABLE IF NOT EXISTS inscripciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  clase_id INT,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO clases (nombre, horario, plazas) VALUES
('Yoga matinal','Lunes 08:00',10),
('HIIT avanzado','Martes 19:00',8);
