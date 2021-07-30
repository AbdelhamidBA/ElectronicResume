const express = require("express")
const fileUpload = require('express-fileupload')
const connectDB = require("./config/db")
const routes = require("./routes/api/routes")
const owner = require("./routes/api/owner")
const experience = require("./routes/api/experience")
const education = require("./routes/api/education")
const certificate = require("./routes/api/certificate")
const project = require("./routes/api/project")
const path = require('path')
const app = express();

// Connect Database

connectDB();
app.use(fileUpload())
app.use(express.json())

app.use('/api/owner', owner)
app.use('/api/experience', experience)
app.use('/api/education', education)
app.use('/api/certificate', certificate)
app.use('/api/project', project)
app.use(express.static('client/build'))
app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is up and Running on Port: ${PORT}`);
});