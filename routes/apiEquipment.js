import express from 'express';
const equip = express();
import {getEquip, postEquip, putEquip, deleteEquip} from '../controllers/equipmentController.js'

equip.get('', getEquip);

equip.post('', postEquip);

equip.put('/:id', putEquip);

equip.delete('/:id', deleteEquip);

export {equip}