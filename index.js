import express from 'express';

import config from './config/config';
import route from './routes/route';

const app = express();

app.use('/', route)

app.listen(config.serverPort, ()=>{
    console.log(`Server is running on port ${config.serverPort}!`)
})