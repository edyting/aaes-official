import express from 'express';
import { createprojects, getAllprojectss, getprojectsById, updateprojects, deleteprojects } from '../controllers/projectController.js';
import { upload } from '../utils/multerconfig.js';

const router = express.Router();

router.post('/', upload.single('coverImg'),createprojects);
router.get('/', getAllprojectss);
router.get('/:id', getprojectsById);
router.put('/:id', updateprojects);
router.delete('/:id', deleteprojects);

export default router;
