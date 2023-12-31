import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

async function startApp() {
    try {
        mongoose.Promise = Promise;
        await mongoose.connect("mongodb+srv://horbanolha64:pa0cTNtv9NK4OIsp@cluster0.2odf8mh.mongodb.net/test");
        mongoose.connection.on('error', (error: Error) => console.log(error));

        server.listen(8080, () => {
            console.log('Server running on http://localhost:8080/');
        });
    } catch (e) {
        console.log(e)
    }
}

startApp()


