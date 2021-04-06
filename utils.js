const { User } = require('./model.js')

async function matchCredentials(requestBody) {
    const check = await User.findOne(
        {where: {username: requestBody.username, password:requestBody.password }
    })
    if(check != null){
        return true
    } else {
    return false
    }
    }

module.exports = matchCredentials
   