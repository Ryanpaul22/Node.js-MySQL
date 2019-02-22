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
  console.log("\n");
  

  
})
ask();

};


function ask() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;

  inquirer
    .prompt([
      {
        name: "whatID",
        type: "input",
        message: "What is the item_id of the product you want to purchase?"
      },
      {
        name: "howMuch",
        type: "input",
        message: "How many units would you like to buy?"
      }
    ])
    .then(function(answer) {
        

        var chosenID = answer.whatID;
        var chosenQuantity = answer.howMuch;
        var chosenProduct = results[chosenID - 1];
        var stockQuantity = chosenProduct.stock_quantity;
        var totalPrice = (chosenQuantity * chosenProduct.price);
        

        if (chosenQuantity <= stockQuantity) {
          stockQuantity = stockQuantity - chosenQuantity;
          chosenProduct.stock_quantity = stockQuantity;
          console.log("Order Successful!");
          console.log("Order price: $" + totalPrice);
          console.log("\n");
          console.log(stockQuantity + " units left in stock");
          console.log("\n");

          orderAgain();
        }

        else {console.log("Insufficent Quantity");
        console.log("\n");
              orderAgain();}

        

        // console.log(chosenProduct);
        // console.log(chosenProduct.stock_quantity);
        // console.log(quantity);
      })

    })
  
  function orderAgain() {
    inquirer
      .prompt({
        name: "orderAgain",
        type: "rawlist",
        choices: ["Yes", "No"],
        message: "Make another order?"
      })
      .then(function(answer) {
        if ((answer.orderAgain) === "Yes") {
          ask();
        }
        else (console.log("Have a good day!")); 
      })
  }
 
  }


    
      









