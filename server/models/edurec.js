import { query } from '../db/index.js';

const dbGetStudents = async () => {
  const { rows } = await query('SELECT * FROM student');
  return rows;
};

export { dbGetStudents };
