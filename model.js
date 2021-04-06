//loading Sequalize Database
const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
},{sequelize,modalName:'user'});

 

(async () => {
    await sequelize.sync()
})()
​
let models = {
    User: User
}
​
module.exports = models