import {Router} from 'express';
import {pool} from '../db.js'

const router = Router();

router.get('/ping', async (req,res)=>{
    const [re] = await pool.query('select 1 + 1 as result');
    if(re[0] > 0){
      res.send("Se conecto de forma correcta...");
    }
    res.json(re);
  });

export default router;