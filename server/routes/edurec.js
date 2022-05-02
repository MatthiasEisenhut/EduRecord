import express from 'express';
import asyncHandler from 'express-async-handler';

import { getStudents } from '../controllers/edurec.js';

const router = express.Router();

router.get('/students', asyncHandler(getStudents));

export default router;
