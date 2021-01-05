import patients from '../../data/patients';

import {NewPatientEntry, NewVisitEntry, NonSensitivePatientEntry, PatientEntry} from '../types';
const id = () => Math.floor(Math.random() * 1000).toString();
const getEntries = (): Array<PatientEntry> => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patients;
};

const getEntry = (id: string): PatientEntry => {
    return patients.filter(patient => patient.id === id)[0];
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

const addVisitEntry = (entry: NewVisitEntry, patientId: string): PatientEntry | undefined => {
    const patient = patients.find(patient => patient.id === patientId);
    const visitEntry = {
        id: id(),
        ...entry
    }
    if (patient) {
        patient.entries.push(visitEntry)
    }

    return patient;
};



export default {
    getEntry,
    getEntries,
    getNonSensitiveEntries,
    addEntry,
    addVisitEntry
};