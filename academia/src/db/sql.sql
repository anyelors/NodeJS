CREATE DATABASE IF NOT EXISTS academia_db;
USE academia_db;

-- Usuarios
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  rol ENUM('admin', 'alumno') NOT NULL
);

-- Cursos
CREATE TABLE cursos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

-- Asignaturas
CREATE TABLE asignaturas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  curso_id INT,
  FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

-- Inscripciones
CREATE TABLE inscripciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  curso_id INT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

-- Notas
CREATE TABLE notas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  asignatura_id INT,
  nota DECIMAL(4,2),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (asignatura_id) REFERENCES asignaturas(id)
);

-- Cursos
INSERT INTO cursos (nombre) VALUES
('Desarrollo Web'),
('Inteligencia Artificial');

-- Asignaturas
INSERT INTO asignaturas (nombre, curso_id) VALUES
('HTML y CSS', 1),
('JavaScript Avanzado', 1),
('Redes Neuronales', 2),
('Machine Learning', 2);