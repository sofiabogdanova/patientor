import patients from '../../data/patients';

import {PatientEntry, NonSensitivePatientEntry, NewPatientEntry} from '../types';

const getEntries = (): Array<PatientEntry> => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patients;
};

const addEntry = (
    entry: NewPatientEntry
): PatientEntry => {

    const patientEntry = {
        id: id(),
        ...entry
    };

    patients.push(patientEntry);
    return patientEntry;
};

const id = () =>  Math.floor(Math.random() * 1000).toString();

export default {
    getEntries,
    getNonSensitiveEntries,
    addEntry
};