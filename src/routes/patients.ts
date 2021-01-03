import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from "../utils/toNewPatientEntry";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getNonSensitiveEntries());
});

router.post('/', (req, res) => {
    // const { name, dateOfBirth, ssn, gender, occupation } = req.body;
    // const newPatientEntry = patientService.addEntry({
    //     name,
    //     dateOfBirth,
    //     ssn,
    //     gender,
    //     occupation
    // });
    const newPatientEntry = toNewPatientEntry(req.body);

    const addedEntry = patientService.addEntry(newPatientEntry);
    res.json(addedEntry);
});

export default router;