const { User } = require('./model.js')

function matchCredentials(requestBody) {
    let user = User
    
    if (user.username === requestBody.username
    && requestBody.password === user.password) {
    return true
    } else {
    return false
    }
    }

module.exports = matchCredentials