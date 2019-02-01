var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Socrates2018",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  
  start();
  });

function start() {

connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
  if (err) throw err;
  console.log("\nProducts:\n");
  console.log(res);
})

};



function ask() {
  inquirer
    .prompt({
      name: "whatID",
      type: "input",
      message: "What is the ID of the product you want to purchase?"
      },
      {
        name: "howMuch",
        type: "input",
        message: "How many units would you like to purchase?"
      })
    
};









