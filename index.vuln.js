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


const Vulnerability1 = (req, res) => {
    let url = encodeURI(req.query.url); //vulnerability
    res.redirect(url);
}
    
app.get('/vuln1', Vulnerability1);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))