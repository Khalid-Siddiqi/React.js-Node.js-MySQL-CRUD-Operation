const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//midle ware
app.use(cors());
app.use(express.json());

//Routes//

//create a todo
app.post("/todos", async(req, res)=>{
    try{

        console.log(req.body)

    } catch (err){
        console.error(err.message);
    }
}
)
//get all todos

// update a todo

//delete a todo

app.listen(5000, ()=>{
    console.log("server has started on port 5000");
})