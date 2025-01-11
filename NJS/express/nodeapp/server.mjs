import express from "express";
import { dirname } from "path";


const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post('/data', (req, res) => {
    const data = req.body; 
    console.log('Received data:', data);
    res.status(201).json({ message: 'Data received successfully' });
  });
  
app.listen(port, () => {
    console.log(`node app listening on port ${port}`);
});