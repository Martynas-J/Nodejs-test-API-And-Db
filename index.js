const express = require("express");
const app = express();
const port = 3000;
const router = require('./src/student/routes');

app.use(express.json())

app.use('/api/v1/students', router);
app.use('/api/v1/students/:id', router);

app.get("/", (req, res) =>{
    res.send("hello jon")
})

app.listen(port, () => console.log(`app listening on port ${port}`)) 
