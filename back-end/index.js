import express from "express"
import { configDotenv } from "dotenv"
const port=process.env.PORT||3000;
const app=express()

app.use(express.static("dist"));

// https://id.atlassian.com/invite/p/confluence?id=ba8hV7SKQoeOlVAw76ZLFA

app.get("/",(req,res)=>{
    res.send("hii this is our home page")
})
app.get("/api/cricketers",(req,res)=>{

const data=[
    {id:1,
    name:"virat kohli",
    place:"rajasthan"

},
{
    id:2,
    name:"kageswar rabbada"
    ,place:"south africa"
},
{
    id:3,
    name:"nicholos pooran"
    , place:" west indies"
},
{
    id:4,
    name:"sam curron"
    , place:" england"
},
{
    id:5,
    name:"karlos brethewett"
    , place:"west indies"
},
{
    id:6,
    name:"abrahim benjamin develires"
    , place:"south africa"
},

]

    return res.send(data)
})




app.listen(port,()=>{
    console.log(`our app is listining on port :${port}`)
})