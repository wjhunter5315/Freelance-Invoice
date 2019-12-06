DROP DATABASE IF EXISTS freelance_db;
CREATE DATABASE freelance_db;
USE freelance_db;

CREATE TABLE users_info (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    location varchar(100) NOT NULL,
    password varchar(50) NOT NULL,
    school varchar (100) NOT NULL,
    degree_certificate varchar (50) NOT NULL,
    fieldofstudy varchar (50) NOT NULL
);

CREATE TABLE users_experience (
    userID INTEGER PRIMARY KEY,
    title varchar (50),
    company varchar (50),
    jobdescrption varchar (50)
    userexpID INTEGER AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY(userexpID) REFERENCES users_info(id)

)






-- Push in damn you


