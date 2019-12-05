DROP DATABASE IF EXISTS freelance_db;
CREATE DATABASE freelance_db;
USE freelance_db;
CREATE TABLE users_info (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE profile_info (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    userID INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(userID) REFERENCES users_info(id)
);