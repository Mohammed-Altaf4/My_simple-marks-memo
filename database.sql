CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  regid VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(100),
  branch VARCHAR(50)
);

INSERT INTO students (regid, password, name, branch)
VALUES ('AU123', 'password123', 'Altaf Baig', 'CSE');
