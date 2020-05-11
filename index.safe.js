const express = require('express')
const helmet = require('helmet')

var bodyParser = require('body-parser')
 
var app = express()

app.use(helmet())
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
  }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const port = 3000


const safe1 = (req, res) => {
    let followPath = req.query.path;
    if(req.session.isAuthenticated()){
        res.redirect('http://example.com/' + followPath); //false positive
    }else{
        res.redirect('/');
    }
}
    
app.get('/safe1', safe1);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))