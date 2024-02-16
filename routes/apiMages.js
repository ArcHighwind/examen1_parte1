import express from 'express';
const mage = express();
import { getMage, postMage, putMage, deleteMage } from '../controllers/mageController.js';

mage.get('', getMage);

mage.post('', postMage);

mage.put('/:id', putMage);

mage.delete('/:id', deleteMage);

export {mage}