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

       const { description } = req.body;
       const newTodo =await pool.query("INSERT INTO (description) VALUES($1)"
       [description]);

        res.json(newTodo)
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