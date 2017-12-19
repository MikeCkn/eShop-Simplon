import express from 'express';

import config from './config/config';
import routes from './routes/route';

const app = express();

app.use('/', routes)

app.listen(config.serverPort, ()=>{
    console.log(`Server is running on port ${config.serverPort}!`)
})