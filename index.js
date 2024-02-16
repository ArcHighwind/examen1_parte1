import express from 'express';
import {mage} from './routes/apiMages.js';
import {schools} from './routes/apiSchools.js';
const app = express();
app.use(express.json());
const port = 5002;

app.use('/api/mage', mage);
app.use('/api/schools', schools);

app.listen(port, ()=>{
    console.log(`escuchando en el puerto ${port}`);
})