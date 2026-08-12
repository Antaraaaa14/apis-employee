const express = require('express');
const employeeRouter = require('./router/employeeRouter');
const db = require('./config/db');
const cors = require('cors');

const app = express();


app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/employee', employeeRouter);

app.listen(4010, () => {
    console.log(`Server is running on port 4010`);
});