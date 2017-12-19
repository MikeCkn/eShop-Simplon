import express from 'express';
import mongoose from 'mongoose';

import config from './config/config';
import routes from './routes/route';

const app = express();

//CONNECT DB
mongoose.connect(config.db, ()=> {
    console.log('DB Connected !')
});

//BODYPARSER
app.use(express.urlencoded({
    extended: true
}));

//ROUTES
app.use('/', routes);


//TEST SERVER
app.listen(config.serverPort, ()=>{
    console.log(`Server is running on port ${config.serverPort}!`)
})