import express from 'express';


const router = express.Router();

const cursos = [
    { id : 1 , name : 'JS',    nivel : 'nivelazo' },
    { id : 2 , name : 'React', nivel : 'mas nivelazo'},
    { id : 3 , name : 'BBDD',  nivel : 'top'}];


router.get('/', (_,res) => res.status(200).json(cursos));

export default router;