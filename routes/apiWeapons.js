import express from 'express';
const weapon = express();
import {getWeapon, postWeapon, putWeapon, deleteWeapon} from '../controllers/weaponController.js'

weapon.get('', getWeapon);

weapon.post('', postWeapon);

weapon.put('/:id', putWeapon);

weapon.delete('/:id', deleteWeapon);

export {weapon}