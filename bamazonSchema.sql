DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(400) NOT NULL,
  department_name VARCHAR(400) NOT NULL,
  price DECIMAL(10,2) default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);
