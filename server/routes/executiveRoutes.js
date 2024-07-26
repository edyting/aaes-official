import express from 'express';
import { createExecutive, getAllExecutives, getExecutiveById, updateExecutive, deleteExecutive } from '../controllers/executiveController.js';
import { upload } from '../utils/multerconfig.js';
// import { isAuthenticated } from '../controllers/userController.js';

const router = express.Router();

router.post('/',upload.single('photo'),createExecutive);
router.get('/', getAllExecutives);
router.get('/:id', getExecutiveById);
router.put('/:id',updateExecutive);
router.delete('/:id',deleteExecutive);

export default router;
