import express from 'express';
import { createGalleryItem, getAllGalleryItems, getGalleryItemById, updateGalleryItem, deleteGalleryItem } from '../controllers/galleryController.js';
import { upload } from '../utils/multerconfig.js';
// import { isAuthenticated } from '../controllers/userController.js';

const router = express.Router();

router.post('/', upload.single("cover"),createGalleryItem);
router.get('/', getAllGalleryItems);
router.get('/:id', getGalleryItemById);
router.put('/:id',updateGalleryItem);
router.delete('/:id',deleteGalleryItem);

export default router;
