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
});

listTable()

function listTable() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            console.log("Item #: " + res[i].ID + " | " +
                "Product: " + res[i].product_name + " | " +
                "Department: " + res[i].department_name + " | " +
                "Price: " + "$" + res[i].price + " | " +
                "In Stock: " + res[i].stock_quantity);
        }
        buyItem()
    }
    )

}

let buyItem = function () {
    inquirer.prompt([
        {
            name: "item_ID",
            type: "input",
            message: "What is the # of the item you would like to buy?",
        },
        {
            name: "quantity",
            type: "input",
            message: "how many units?",
        }])
        .then(function (answer) {
            connection.query("select * from products", function (err, res) {
                if (err) throw (err);

                var chosenItem = [];
                for (let i = 0; i < res.length; i++) {
                    if (res[i].item_id === parseInt(answer.itemId)) {
                        chosenItem = res[i];
                    }
                }
                if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
                    connection.query(
                        "upddate products ? where ?", [{
                            stock_quantity: (chosenItem.stock_quantity - parseInt(answer.quantity))
                        }]
                    )
                }





            })


        }
