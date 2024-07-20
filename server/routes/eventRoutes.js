import express from 'express';
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } from '../controllers/eventController.js';
import { upload } from '../utils/multerconfig.js';

const router = express.Router();

router.post('/',upload.single('photo'),createEvent);
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
