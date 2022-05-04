import validator from 'is-my-json-valid';
import {
  dbGetStudents,
  dbGetStudent,
  dbDeleteStudent,
  dbPostStudent,
  dbPatchStudent,
} from ' ../models/edurec.js';

const validate = validator({
  required: true,
  type: 'object',
  properties: {
    firstname: {
      required: true,
      type: 'string',
    },
    lastname: {
      required: true,
      type: 'string',
    },
    dob: {
      required: true,
      type: 'date',
    },
    className: {
      required: true,
      type: 'string',
    },
    date_of_enrollment: {
      required: true,
      type: 'date',
    },
    expected_date_of_graduation: {
      required: true,
      type: 'date',
    },
  },
});

const getStudents = async (req, res) => res.status(200).json(await dbGetStudents());

const delStudent = async (req, res) => {
  const { id } = req.params;
  const student = dbGetStudent(id);
  if (!student) return res.status(404).send('Ressource not found');
  await dbDeleteStudent(id);
  return res.status(200).end();
};

const postStudent = async (req, res) => {
  if (!validate(req.body)) return res.status(400).json(validate.errors);
  const student = await dbPostSight(req.body);
  return res.status(200).json(student);
};

const patchStudent = async (req, res) => {
  const { id } = req.params;
  const student = await dbPatchSight(id, req.body.date_of_graduation);
  if (!student) return res.status(404).send('Ressource not found');
  return res.status(200).json(student);
};

export { getStudents, delStudent, postStudent, patchStudent };
