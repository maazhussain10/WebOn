const { connection } = require("./connection");
const uuid = require("uuid-random");

exports.createUser = (firstName, lastName, email, password) => {
    let sql = `Insert into users values(?, ?, ?, ?, ?);`;
    connection.query(
        sql,
        [uuid(), firstName, lastName, email, password],
        (err, results) => {
            if (err) return console.log(err);
            else {
                console.log("User has been created");
            }
        }
    );
};

exports.userExists = async (username) => {
    console.log(username);
    let sql = "Select * from users where username=?;";
    return new Promise((resolve, reject) => {
        connection.query(sql, [username], (err, results) => {
            if (err) console.log(err);
            else if (results.length != 0) {
                console.log(results);
                let responseData = {
                    firstName: results[0].firstName,
                    lastName: results[0].lastName,
                    username: results[0].username,
                    password: results[0].password,
                };
                resolve(responseData);
            } else resolve(false);
        });
    });
};
