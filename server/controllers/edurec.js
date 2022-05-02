import { dbGetStudents } from '../models/edurec.js';

const getStudents = async (req, res) => res.status(200).json(await dbGetStudents());

export { getStudents };