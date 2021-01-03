import patients from '../../data/patients';

import { PatientEntry, NonSensitivePatientEntry } from '../types';

const getEntries = (): Array<PatientEntry> => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patients;
};

const addEntry = () => {
    return null;
};

export default {
    getEntries,
    getNonSensitiveEntries,
    addEntry
};