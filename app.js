const express = require('express')
const app = express()
const port = 3000


app.set("view engine" , "pug")
app.set('views','./views');

function check(req, res, next) {
    var today = new Date()
    let currentHour = today.getHours();
    let day = today.getDay();
    if ((currentHour > 16) && (currentHour < 17) && (day > 0) && (day < 6)) {
        console.log("hello")
        next()
    }
    else {
        res.render('work_time')

    }
}




app.get('/' , check, function (req , res ){
    res.render('home')
});



app.listen(port , ()=>{
    console.log(`server ranning on port ${port}`)
});