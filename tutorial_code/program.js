
/*
code tests from learnyounode npm module

var outputText2 = data.toString();
var regexpN = new RegExp("/("+process.argv[3]+")","g");
var checkNewlines = outputText2.match(/()/g);


console.log(checkNewlines.length);
    
MAKE IT MODULAR TEST
var mymodule = require('./module.js');

mymodule(process.argv[2],process.argv[3],function(err,data){
if (err) {console.log("problem", err);}

else { for (var z = 0, len2 = data.length; z <len2; z++) { console.log(data[z]); } }
    
});



 HTTP CLIENT TEST
var http = require('http');
var urlCheck = process.argv[2];
http.get(urlCheck,function(response){

 response.on("data",function (data){
    console.log(data.toString()); 
 });
 
 response.on("error",function(error){
     console.log(error.message);
     
 });  
    
});

var http = require('http');
//var urlCheck = process.argv[2];
var serverResponses ={'server1data':"",
                      'server2data':"",
                      'server3data':"",
                        'serversReturned':0
};

function checkServers(urlCheck,serverNum){
var responseTemp = "";
    
http.get(urlCheck,function(response){

 response.on("data",function (data){
    responseTemp += data.toString(); 
 });
 
 response.on("error",function(error){
     console.log(error.message);
     
 });  
 
 response.on("end",function(){
    serverResponses["server"+serverNum+"data"] = responseTemp;
    serverResponses.serversReturned++;
  if (serverResponses.serversReturned === 3) {
      console.log(serverResponses.server1data);
      console.log(serverResponses.server2data);
      console.log(serverResponses.server3data);
      
      
  }  
    
});
    
});

};

checkServers(process.argv[2],1);
checkServers(process.argv[3],2);
checkServers(process.argv[4],3);

//"YYYY-MM-DD hh:mm"  
var net = require('net');
var server = net.createServer(function(connection){
var dateObj = new Date();
var sendDate = dateObj.getFullYear() + "-" + (dateObj.getMonth().toString().length > 1  ? dateObj.getMonth() + 1 : "0"+(dateObj.getMonth() +1) );
sendDate = sendDate +"-"+(dateObj.getDate().toString().length > 1  ? dateObj.getDate() : "0"+ dateObj.getDate() );
sendDate = sendDate +" "+(dateObj.getHours().toString().length >1 ? dateObj.getHours() : "0" + dateObj.getHours() );
sendDate = sendDate +":"+(dateObj.getMinutes().toString().length >1 ? dateObj.getMinutes() : "0" + dateObj.getMinutes());
sendDate = sendDate + "\n";

connection.end(sendDate);    
    
});

server.listen(process.argv[2]);


simple send a file provied by command line args server
var http = require('http');
var fs = require('fs');

var fileStream = fs.createReadStream(process.argv[3]);

var server = http.createServer(function(request,response){
console.log("connected");



fileStream.pipe(response);


});


   

server.listen(process.argv[2]);
console.log("server listening on", process.argv[2]);

HTTP uppercaser 


var http = require('http');
var dataToSend = "";
var server = http.createServer((req,response)=> {
    
    req.on('data', (chunk)=>{
    dataToSend += chunk.toString().toUpperCase();    
    });
    
    req.on('end', ()=>{
       response.end(dataToSend);
    });

    
 

    
});
server.listen(process.argv[2]);

*/

var urlParse ={};
var http = require('http');
var url = require('url');
var dateRes;
var dateRegexp = new RegExp('(\\d\\d):(\\d\\d):(\\d\\d)','g');
var dateJSON = "";

var server = http.createServer((req,response)=> {

urlParse = url.parse(req.url,true);
 console.log(urlParse);

response.writeHead(200, { 'Content-Type': 'application/json' });

if (urlParse.path.toString().toUpperCase().includes("PARSETIME")) { 

// makes a new date object, then pulls out the hh:mm:ss, then turns it into a string. 
dateRes = new Date(urlParse.query.iso).match(dateRegexp).toString();
//console.log(dateRes);
// + in front of the slice turns them into numbers, same as doing Number(datRes.slice) afaik
dateJSON = {'hour':+dateRes.slice(0,2),'minute':+dateRes.slice(3,5),'second':+dateRes.slice(6,8)};
/*console.log(dateJSON);
console.log(JSON.stringify(dateJSON));
console.log(dateRes.slice(0,2));
console.log(dateRes.slice(3,5));
console.log(dateRes.slice(6,8));
//console.log(typeof(dateRes.match(dateRegexp)));
  */
 //console.log(JSON.stringify(dateJSON));
 response.end(JSON.stringify(dateJSON)); 
}
  

  
});
server.listen(process.argv[2]);
