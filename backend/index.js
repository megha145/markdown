import express from 'express'
import {marked} from 'marked'
import cors from 'cors'

const port = 3050
const app = express() // creating express app
app.use(express.json())
app.use(cors())

// api call 
app.post('/markdown', (req,res)=>{
    const { markdownText } = req.body    // Object Destructing
    const html = marked(markdownText)
    res.send(html)


})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})