

const bcrypt = require("bcrypt")
var dbClient = require('./helper/mysql-client');

// Base user information
const user = {user:user, pass:null, sessionExpiration:null}
// Base query from create user
var sql = "INSERT INTO users (username, password) VALUES ?";

// function to create new user with required data
const newUser = (user, pass) => {
    //base user information
    user.user = user
    bcrypt.genSalt(12, (err, salt) => {
        if (err) throw err;
        // encrypt password into db to not save plain data
        bcrypt.hash(pass, salt, function(err, hash) {
            user.pass = hash
            dbClient.createuser()
            dbClient.query(sql, [[user.user, user.pass]], function (err, result) {
                if (err) throw err;
                console.log("Number of records inserted: " + result.affectedRows);
              });
        });
    })
    return 
 }
 
 const loginUser = (user, pass) => {

 }

module.exports = {
    newUser: newUser,
    loginUser: loginUser
};