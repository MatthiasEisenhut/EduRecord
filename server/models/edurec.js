import { query, pool } from '../db/index.js';

const dbGetStudents = async () => {
  const { rows } = await query('SELECT * FROM student');
  return rows;
};

const dbGetStudent = async (id) => {
  const { rows } = await query('SELECT * FROM student WHERE id = $1', [id]);
  return rows[0];
};

const dbDeleteStudent = async (id) => {
  query('DELETE FROM sights WHERE id = $1', [id]);
};

const dbPostStudent = async ({
  firstname,
  lastname,
  dob,
  className,
  date_of_enrollment,
  expected_date_of_graduation,
}) => {
  const { rows } = await query(
    'INSERT INTO student (firstname, lastname, dob, class, date_of_enrollment, expected_date_of_graduation) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [firstname, lastname, dob, className, date_of_enrollment, expected_date_of_graduation],
  );
  return rows[0];
};

const dbPatchStudent = async (id, date_of_graduation) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const { rows } = await client.query('SELECT * FROM student WHERE id = $1', [id]);
    if (!rows[0]) return null;
    const res = await client.query(
      'UPDATE student SET date_of_graduation = $1 WHERE id = $2 RETURNING *',
      [date_of_graduation, id],
    );
    await client.query('COMMIT');
    return res.rows[0];
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

export { dbGetStudents, dbGetStudent, dbDeleteStudent, dbPostStudent, dbPatchStudent };
