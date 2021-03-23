const express = require('express')
const app = express()
const port = 3003

app.use(express.json())

const users= [
    {"start_time":"10:00","end_time":"11:00","description":"Learn nodeJS development","participants":["Prashant Lehri","Jatin Makkar"]},
    {"start_time":"14:00","end_time":"14:30","description":"iOS development session 1.0","participants":["Akhil Gupta","Sumit Arora"]},
    {"start_time":"9:30","end_time":"11:00","description":"Learn nodeJS development","participants":["Sushant Sehgal","Jatin Makkar","Sumit Arora","Rajeev Kakkar"]},
    {"start_time":"15:30","end_time":"16:00","description":"Development team of Deal**y project will do a KT session of the last sprint.","participants":["Sushant Sehgal","Prashant Lehri"]}
]

app.post('/users', (req,res) => {
  res.json(users)  
})

app.get('/users', (req,res) => {
    res.json(users)
} )

app.listen(port, () => {
    console.log('listening on port', port)
})
