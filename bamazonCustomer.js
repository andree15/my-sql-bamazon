var mysql = require("mysql2");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nizlen5(",
    database: "bamazon_db"
});
connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
      .prompt({
        name: "listOfItems",
        type: "confirm",
        message: "Would you like to see the items available?",
        choices: ["Y", "N"]
      })
      .then(function(answer) {
        if (answer.listOfItems === "Y") {
          listTable();
        }
        else if(answer.listOfItems === "N") {
          connection.end();
        }
      });
  }

  function listTable(){
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].item_name);
              }
              return choiceArray;
            },
            message: "What auction would you like to place a bid in?"
          },
          {
            name: "bid",
            type: "input",
            message: "How much would you like to bid?"
          }
        ])
.then


    }
    )}