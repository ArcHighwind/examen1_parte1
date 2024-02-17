import express from 'express';
import {mage} from './routes/apiMages.js';
import {schools} from './routes/apiSchools.js';
import {spell} from './routes/apiSpells.js';
import {equip} from './routes/apiEquipment.js';
import {weapon} from './routes/apiWeapons.js';
const app = express();
app.use(express.json());
const port = 5002;

app.use('/api/mage', mage);
app.use('/api/schools', schools);
app.use('/api/spells', spell);
app.use('/api/equipment', equip);
app.use('/api/weapon', weapon);

app.listen(port, ()=>{
    console.log(`escuchando en el puerto ${port}`);
})