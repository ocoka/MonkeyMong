var express=require("express");
var cookie=require("cookie-parser");
var favicon=require("server-favicon");
var compression=require("compression");
var bodyparser=require("body-parser");
var errorhandler=require("errorhandler");
var app=express();
app.use(compression());
//app.use(favicon("/favicon.ico"));
app.use(cookie());
app.use(bodyparser.raw());
app.use(
    function(req,res,next){
    	
	
    }
);
if (process.env.NODE_ENV !== 'production') {
	  app.use(errorhandler());
}
app.listen(8080);

