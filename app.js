//Loading Moduls
const express = require('express')
const cookieParser = require("cookie-parser")
const { v4: uuidv4 } = require('uuid');
const matchCredentials = require('./utils.js')

//importing user Model from DB
const  User  = require('./model.js')

const app = express()
app.set('view engine', 'ejs')
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

// show home with forms
app.get('/', function(req, res){
res.render('pages/home')
})

// create a user account
app.post('/create', async function(req, res){
    let body = req.body
    const user = await User.create({
        username: body.username,
        password: body.password  
    }) 
    await user.save();
 
    res.send('User Created')
    console.log( user.toJSON() )
})

       
            // login
            app.post('/login', async function(req, res){
            if (matchCredentials(req.body)) {
                let user = req.body.username
                  let sess = uuidv4()
                  
                  let ids = {
                    id: sess,  
                    user: user,
                    timeOfLogin: Date.now()
                  }
            User.sessions = ids

            console.log(user.toJSON())
        
                // create cookie that holds the UUID (the Session ID)
              let x =   res.cookie('SID', ids.id, {
                    expires: new Date(Date.now() + 900000),
                    httpOnly: false
                    })
                   
                  
                    res.render('pages/members')
                    } else {
                    res.redirect('/error')
                    }
                })

              
                    
    // this is the protected route
    app.get('/supercoolmembersonlypage', function(req, res){
    let session= req.cookies.SID
    console.log("Session is :" + req.cookies.SID)
    
    // to error.ejs
if (session) {
    res.render('pages/members')
    } else {
    res.render('pages/error')
    }
    })

    // if something went wrong, you get sent here
    app.get('/error', function(req, res){
    res.render('pages/error')
    })
    // 404 handling
    app.all('*', function(req, res){
    res.render('pages/error')
    })




    app.listen(1612)
    console.log('Server is running on 1612')

