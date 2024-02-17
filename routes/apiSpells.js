import express from 'express';
const spell = express();
import { getSpell, postSpell, putSpell, deleteSpell } from '../controllers/spellController.js';

spell.get('', getSpell);

spell.post('', postSpell);

spell.put('/:id', putSpell);

spell.delete('/:id', deleteSpell);

export {spell}