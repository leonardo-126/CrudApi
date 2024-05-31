import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "004557",
    database: "crud"
})

//ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';