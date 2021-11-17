import * as express from 'express';
import db from '../db'; 

const router = express.Router();

router.get('/:id?', async (req, res, next) => {

    const chirpid = Number(req.params.id);

    if (chirpid) {
        try {
            const [chirp] = await db.chirps.one(chirpid);
            res.json(chirp);
        } catch(error) {
            console.log(error); 
            next(error);
        }
    } else {
        try {
            const chirps = await db.chirps.all();
            res.json(chirps);
        } catch(error) {
            console.log(error); 
            next(error);
        }
    };
});

router.post('/', async (req, res, next) => {

    const chirpDTO= req.body;

    try {
        const { insertId: chirpid } = await db.chirps.insert(chirpDTO);
        res.json({chirpid, msg: 'chirp added!'});
    } catch(error) {
        console.log(error); 
       next(error);
    }
});

router.put('/:id', async (req, res, next) => {

    const chirpDTO= req.body;
    const chirpid = Number(req.params.id);
    
    try {
        const { affectedRows: updatedid } = await db.chirps.update(chirpDTO, chirpid);
        res.json({updatedid, msg:'chirp updated!'});
    } catch(error) {
        console.log(error); 
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {

    const chirpid = Number(req.params.id);

    try {
        const { affectedRows } = await db.chirps.destroy(chirpid);
        res.json({ affectedRows, msg:'chirp deleted!'});
    } catch(error) {
        console.log(error); 
        next(error);
    }
});


export default router;