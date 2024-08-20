import express from 'express';
import { createprojects, getAllprojects, getprojectsById, updateprojects, deleteprojects } from '../controllers/projectController.js';
import { upload } from '../utils/multerconfig.js';


const router = express.Router();

router.post('/',upload.single('coverImg'),createprojects);
router.get('/', getAllprojects);
router.get('/:id', getprojectsById);
router.put('/:id',updateprojects);
router.delete('/:id',deleteprojects);

export default router;
