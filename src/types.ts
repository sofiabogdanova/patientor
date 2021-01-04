export interface Entry {
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