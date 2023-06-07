const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/sean', (req,res) => {res.send("Hello Sean")});

app.get('/nathanael', (req,res) => {res.send("Hello Nathanael")});

app.get('/adrienne', (req,res) => {res.send("Hello Adrienne")});

app.get('/trent', (req,res) => {res.send("Hello Trent")});

app.listen(port, ()=>console.log("Listening"));
