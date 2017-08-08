import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('*',(req, res)=>{
  res.sendFile('public/index.html')
})

app.post('*',(req, res)=>{
  res.sendFile('public/index.html')
})

app.listen(8081)
