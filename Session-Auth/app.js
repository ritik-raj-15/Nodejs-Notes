const express = require('express');
//To handle HTTP POST requests in Express.js version 4 and above, you need to install the middleware module called body-parser.
//body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require('body-parser');

//Create a session middleware
//Note Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.
const session = require('express-session');
const app = express();
const TWO_HOURS = 1000 * 60 * 60 * 2;   //variable to store expiration of cookie. here its 2 hrs 

const{ 
    PORT=3000,
    SESS_NAME = 'sid',
    SESS_LIFETIME = TWO_HOURS
} = process.env; 

const users = [
    {id:1, name:"Alex", email:'alex@gmail.com', password:'secret'},
    {id:2, name:"Max", email:'max@gmail.com', password:'secret'},
    {id:3, name:'Hagard', email:'hagard@gmail.com', password:'secret'}
]

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(session({
    name: SESS_NAME,
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure:false,// just do secure to false otherwise session id will not be persisted (Hint for http secure:false or https secure:true)
        maxAge:SESS_LIFETIME,
        sameSite: true // 'true will set the SameSite attribute to Strict for strict same site enforcement.'
    }
  }))

app.use((req,res,next)=>{
    const {userId} = req.session;
    if(userId){
        res.locals.user = users.find(user => user.id === userId)
    }
    next()
})
const redirectLogin = (req,res,next)=>{
    if(!req.session.userId)
    {
        res.redirect('/login')
    }
    else
    {
        next()
    }
}
const redirectHome = (req,res,next)=>{
    if(req.session.userId)
        res.redirect('/home')
    else
        next()
}

app.get('/',(req,res)=>{
    const {userId}  = req.session;
        res.send(`
        <h1>Welcome!</h1>
        ${ userId ?
            `<a href="/home">Home</a>
            <form method='POST' action='/logout'>
            <button>Logout</button>
            </form>` 
            :
        `<a href='/login'>Login</a>
        <a href="/register">Register</a>`}
        `)
})
 // redirectLogin is the protection layer added  (middleware)   
app.get('/home',redirectLogin,(req,res)=>{
    const { user } = res.locals
        res.send(`
        <h1>Home</h1>
        <a href='/'>Main</a>
        <ul>
            <li>Name:${user.name}</li>
            <li>Email:${user.email}</li>
        </ul>
        `)
})
// redirectHome is the protection layer added
app.get('/login',redirectHome,(req,res)=>{
    res.send(`
        <h1>Login</h1>
        <form method="POST" action='/login'>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder="password" required/>
            <input type="submit"/>
            </form>
    <a href='/register'>Register</a>
    `)
})
app.get('/register',redirectHome,(req,res)=>{
    res.send(`
    <h1>Register</h1>
    <form method="POST" action='/register'>
        <input name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <input type="password" name="password" placeholder="password" required/>
        <input type="submit"/>
        </form>
        <a href='/login'>Login</a>
`)
})
app.post('/login',redirectHome,(req,res)=>{
        const {email,password} = req.body
        if(email && password)
        {
            const user = users.find(user => user.email === email && user.password === password)
        if(user)
        {
            req.session.userId=user.id;
            return res.redirect('/home')
        }
    }
      res.redirect('/login')
})
app.post('/register',redirectHome,(req,res)=>{
    const {name,email,password} = req.body
    if(name && email && password)
    {
        const exists = users.some(user => user.email === email) //returns true if element found else false
        
        if(!exists)
        {
            const user = {
                id:users.length + 1,
                name,
                email,
                password
            }
            users.push(user)
            req.session.userId = user.id
            return res.redirect('/home')
        }
    }
    res.redirect('/register')
})

app.post('/logout',redirectLogin,(req,res)=>{
    req.session.destroy(err=>{
        if(err){
            return res.redirect('/home');
        }
        res.clearCookie(SESS_NAME)
        res.redirect('/login');
    })
})
app.listen(PORT,()=>{
    console.log(`Listening to Port:${PORT}`)
});