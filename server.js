import express from 'express';
import moment from "moment";
import cors from "cors";

import  Router  from './router/index.js';

import './db/conn.js'

const app = express();

const { CORS_ORIGIN, CORS_METHODS } = process.env;
const port = process.env.PORT || 5000;
const corsOptions = { 
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000', 
    methods: process.env.CORS_METHODS.split(',') || ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type'] 
};

app.use(express.json());

app.listen(port, () => {
    console.log(
        `Server is up and running on port ${port} on ${moment().format(
            "DD-MMM-YYYY-T-HH:mm:ss.S"
        )}`
    );
});

// Cross Origin setup
app.use(cors(corsOptions));

// Body Parsing
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


app.use('/', Router)

export default { app }