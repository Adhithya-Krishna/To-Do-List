const express = require("express");
const app = express();
const date = require(__dirname + "/date.js")

// console.log(date()) 
let day =date.getDate();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

let items=["buyfood","make food"];
let workItems=[]

app.get("/",(req,res)=>{
    res.render('list',{listTitle:day,newListItems:items});
});

app.get("/work",(req,res)=>{
    res.render('list',{listTitle:"Work List",newListItems:workItems});
});



app.get("/about",(req,res)=>{
    res.render("about");
});

app.post("/",(req,res)=>{
    let item = req.body.newItem;
    if(req.body.list ==='Work List'){
        workItems.push(item);
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/");
    }

});


app.listen(3000,()=>{
    console.log("Server is runing on port 3000...");
});