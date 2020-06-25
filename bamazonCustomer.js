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
            message: "What is the Item # you would like to buy?",
        },
        {
            name: "quantity",
            type: "input",
            message: "How many units would you like to purchase?",
        }])
        .then(function (answer) {
            connection.query("select * from products WHERE ID = ?",[answer.item_ID], function (err, res) {
                if (err) throw (err);
                var chosenItem=res[0];
                if (chosenItem.stock_quantity >= parseInt(answer.quantity)) {
                    connection.query(
                        "update products set ? where ID = ?", [{
                            stock_quantity: (chosenItem.stock_quantity - parseInt(answer.quantity))
                        }, chosenItem.ID],
                        (err2,res2)=>{
                            console.log("Your total is : $" + chosenItem.price * parseInt(answer.quantity))
                        })

                }else{
                    console.log("you want too much")
                }





            })


        })
    }
