  
  // serving static files, anything under public or the directory passed by second command line argument can be pulled
  /*
  var express = require('express');
    var app = express();
    var path = require('path');
    app.use(express.static(process.argv[3] || path.join(__dirname,'public') ));
    app.listen(process.argv[2]);
    
    
    
    // using jade templating engine. 
    
    var express = require('express');
    var app = express();
    var path = require('path');
    app.set('view engine', 'jade');
    app.set('views', (process.argv[3] || path.join(__dirname,'templates') ));
   app.get('/home',(req,res)=>{
    
    // setting locals
    res.render('index', {date:new Date().toDateString()});
       
   });
   
    app.listen(process.argv[2]);
    
    // Parse input from post request, reverse and return it. 
       var express = require('express');
    var app = express();
    var path = require('path');
  var bodyparser = require('body-parser');
    app.use(bodyparser.urlencoded({extended:false}));
     app.use(express.static(process.argv[3] || path.join(__dirname,'public') ));
    
    app.post('/form',(req,res)=>{
    var inputName = req.body.str;
    inputName = inputName.split("").reverse().join("");
    console.log(inputName);
    res.end(inputName);
    
    });
    
    app.listen(process.argv[2]);
    
    
  // Server css using stylus plugin  
    var express = require('express');
    var app = express();
    var path = require('path');
    
   // stylus ahs to be included first.  
    app.use(require('stylus').middleware(process.argv[3] || 'public'));
    app.use(express.static(process.argv[3]));
    
    app.listen(process.argv[2] || 8080);
   P
   
   
   aram pam pam This exercise is about using URL parameters.
For example, if you have /message/526aa677a8ceb64569c9d4fb, then you should know how to
extract that value which is an ID of the message.

Create an Express.js server that processes PUT /message/:id requests
and produces a SHA-1 hash of the current date combined with the ID from the URL.




var msgID;
var express = require('express');
var app = express();
var crypto = require ('crypto');



   app.put('/message/:id',(req,res)=>{
    msgID = req.params.id;
    console.log(req.params.id);
    
    //this part was straight from the expressworks example. I mostly understand it. 
   res.end(crypto.createHash('sha1').update(new Date().toDateString()+ msgID).digest('hex'));

   });
   
    app.listen(process.argv[2] || 8080);
    
    
    Write a route that extracts data from the query string in the GET /search URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.
    
    
    var express = require('express');
var app = express();
var url = require('url');

app.get('/search', (req,res)=>{
    console.log(req.query);
    
    res.end(JSON.stringify(req.query));
    
});

app.listen(process.argv[2]||8080);

*/

var fs = require('fs');
var express = require('express');

var app = express();

app.get('/books',(req,res)=>{

fs.readFile(process.argv[3],'utf8', (err,file_data)=>{
//console.log(err || file_data);
res.json(JSON.parse(file_data));
res.end();

});
    
});

app.listen(process.argv[2]||8080);