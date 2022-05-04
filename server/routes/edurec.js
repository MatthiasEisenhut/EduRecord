import express from 'express';
import asyncHandler from 'express-async-handler';

import { getStudents, delStudent, postStudent, patchStudent } from '../controllers/edurec.js';

const router = express.Router();

router.get('/students', asyncHandler(getStudents));
router.delete('/students/:id', asyncHandler(delStudent));
router.post('/students', asyncHandler(postStudent));
router.patch('/students/:id', asyncHandler(patchStudent));

export default router;
