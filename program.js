
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

*/


var http = require('http');

var server = http.createServer((req,response)=> {

     req.toString().toUpperCase().pipe(response);
 

    
});
server.listen(process.argv[2]);