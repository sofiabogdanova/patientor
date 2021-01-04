import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from "../utils/toNewPatientEntry";

const router = express.Router();

router.get('/:id', (_req, res) => {
    const id: string = _req.params.id
    res.send(patientService.getEntry(id));
});

router.get('/', (_req, res) => {
    res.send(patientService.getNonSensitiveEntries());
});

router.post('/', (req, res) => {
    const newPatientEntry = toNewPatientEntry(req.body);

    const addedEntry = patientService.addEntry(newPatientEntry);
    res.json(addedEntry);
});

export default router;