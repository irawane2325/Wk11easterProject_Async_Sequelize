//loading Sequalize Database
const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
 User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
   
},{sequelize,modalName:'user'});

class Session extends Model{}
Session.init ({
    sessionId: DataTypes.UUID,
    user: DataTypes.STRING,
    timeOfLogin: DataTypes.DATE
}, {sequelize,modalName:'session'});

(async () => {
    await sequelize.sync();
   

    //console.log(jane.toJSON());
})();
let models = {
    User:User,
    Session:Session
}

module.exports = models


