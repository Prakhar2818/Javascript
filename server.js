const http=require("http")
const srever=http.createServer((res,req)=>{
    res.statusCode=200;
    res.end("Hello World")
});
Server.listen(5500,"127.0.0.1 ",()=>{
    console.log("Server is running a http://127.0.0.1:5500/");
})