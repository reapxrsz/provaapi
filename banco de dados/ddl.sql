CREATE DATABASE vilaoDB;
USE vilaoDB; 

CREATE TABLE tb_vilao (
	id_vilao 			int primary key auto_increment not null unique,
    nm_vilao 			varchar(100),
    ds_maldades			varchar(200),
    bt_poder			boolean
);
