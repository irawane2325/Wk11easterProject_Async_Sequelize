//loading Sequalize Database
const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
},{sequelize,modalName:'user'});

(async () => {
    await sequelize.sync();
   

    //console.log(jane.toJSON());
})();
let model = {
    username: {},
    password:{}
}

module.exports = model


