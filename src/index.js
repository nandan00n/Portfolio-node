const express=require('express');
const app= express();
const path=require('path')
const port=4000;
const hbs=require("hbs");


const staticPath=path.join(__dirname,'../public');
const templatePath=path.join(__dirname, '../templates/views');
const partialsPath=path.join(__dirname, '../templates/partials')
const imagesPath=path.join(__dirname, '../templates/views/img');
// console.log(path.join(__dirname, '../templates/views/img'));

app.use(express.static(imagesPath));

app.set("view engine","hbs");
app.set("views",templatePath)
hbs.registerPartials(partialsPath);



// app.use(express.static(staticPath))

app.get("", (req,res)=>{
    res.render("index" , {
        name:"Peabody"
    })
})

app.get("/about", (req,res)=>{
    res.render("about" , {
        name:"Peabody"
    })
})

app.get('*',(req,res)=>{
    res.render("404", {
        errorcomment: "Opps Something went wrong"
    })
})

// app.get('/', (req,res)=>{
//     res.write('This is landing page');
//     res.send();
// })



// app.get('/about', (req, res)=>{
//     res.write('This is about page');
//     res.send();
// })

app.listen(4000, ()=>{
    console.log(`listening to the port no ${port}`);
})