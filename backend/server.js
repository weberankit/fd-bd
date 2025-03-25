import express from "express"
const app=express()

app.get("/",(req,res)=>{
    res.send('Server is ready')
})

const port =process.env.PORT || 3000



app.get("/api/jokes",(req,res)=>{
const jokes=   [
        {
          "id": 1,
          "title": "Why don’t skeletons fight each other?",
          "content": "Because they don’t have the guts!"
        },
        {
          "id": 2,
          "title": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field!"
        },
        {
          "id": 3,
          "title": "What do you call fake spaghetti?",
          "content": "An impasta!"
        },
        {
          "id": 4,
          "title": "Why don’t eggs tell jokes?",
          "content": "Because they might crack up!"
        },
        {
          "id": 5,
          "title": "Why did the bicycle fall over?",
          "content": "Because it was two-tired!"
        }
      ]
      
    res.send(jokes)
})



app.listen(port,()=>{
    console.log('listeng')
})