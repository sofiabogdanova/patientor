interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<DiagnoseEntry['code']>;
}

export type Entry =
    | HospitalEntry
    | OccupationalHealthcareEntry
    | HealthCheckEntry;

export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
}

interface SickLeave {
    startDate: string;
    endDate: string;
}

interface Discharge {
    date: string;
    criteria: string;
}

interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
}

interface OccupationalHealthcareEntry extends BaseEntry {
    type: "OccupationalHealthcare";
    employerName: string;
    sickLeave?: SickLeave
}

interface HospitalEntry extends BaseEntry {
    type: "Hospital";
    discharge: Discharge;
}

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

export interface PatientEntry {
    id: string;
    name: string;
    dateOfBirth:  string;
    ssn:  string;
    gender: Gender;
    occupation:  string;
    entries: Entry[];
}

export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string
}

export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn' | 'entry'>;

export type NewPatientEntry = Omit<PatientEntry, 'id'>;