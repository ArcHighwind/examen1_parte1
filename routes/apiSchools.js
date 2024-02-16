import express from 'express'
const schools = express();
import {getSchool, postSchool, putSchool, deleteSchool} from "../controllers/schoolController.js"

schools.get('', getSchool);

schools.post('', postSchool);

schools.put('/:id', putSchool);

schools.delete('/:id', deleteSchool);

export {schools}