drop database if exists bamazon_db;

create database bamazon_db;

use bamazon_db;

create table products(
	ID int auto_increment not null,
    product_name varchar(150),
    department_name varchar(150),
    price decimal(10,2),
    stock_quantity int,
    primary key (id)
);
    
    insert into products (product_name, department_name, price, stock_quantity)
    values
    ("basketball","sports", 25.00, 20),
    ("couch","funiture", 300.00, 10),
    ("coffee mug","kitchen", 15.00, 30),
    ("dog bone","pets", 10.00, 20),
    ("macbook","electronics", 1000.00, 20),
    ("ipad","electronics", 800.00, 20),
    ("iphone","electronics", 1000.00, 20),
    ("headphones","sports", 100.00, 20),
    ("tv","electronics", 750.00, 20),
    ("deathstar lego set","toy's and game's", 600.00, 20),
    ("microwave","kitchen", 300.00, 20)
		
    

