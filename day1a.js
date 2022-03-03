const express = require("express")
const app = express();

app.get("/roots",function(req,res){
res.send("hello masai school")
})

app.get("/books",function(req,res){
    res.send([
        {name:"twelveth fail",
        author:"DIG",
        content:" aspirational story of an IAS officer"
    },
    {name:"laxmikant",
    author:"M.laxmikanth",
    content:"a book for indian polity"
},
{name:"history",
author:"satish chandra",
content:"a book for indian history"
},
{name:"oceanography",
author:"Majid hussain",
content:"a book for geography"
},
    ])
})

app.listen(5000,()=>{
    console.log("hello amir")

});