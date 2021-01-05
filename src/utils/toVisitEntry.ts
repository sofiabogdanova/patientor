import {
    Discharge,
    HealthCheckRating,
    NewHealthCheckEntry,
    NewHospitalEntry,
    NewOccupationalHealthcareEntry,
    NewVisitEntry,
    SickLeave
} from '../types';

/* eslint-disable @typescript-eslint/no-explicit-any */
const toNewVisitEntry = (object: any): NewVisitEntry => {
    const type = object.type;
    switch (type) {
        case "Hospital":
            const hospitalEntry: NewHospitalEntry = {
                type: "Hospital",
                description: parseDescription(object.description),
                date: parseDate(object.date),
                specialist: parseSpecialist(object.specialist),
                diagnosisCodes: parseDiagnosisCodes(object.diagnosisCodes),
                discharge: parseDischarge(object.discharge)
            }
            return hospitalEntry;
        case "HealthCheck":
            const healthCheckEntry: NewHealthCheckEntry = {
                type: "HealthCheck",
                description: parseDescription(object.description),
                date: parseDate(object.date),
                specialist: parseSpecialist(object.specialist),
                diagnosisCodes: parseDiagnosisCodes(object.diagnosisCodes),
                healthCheckRating: parseHealthCheckRating(object.healthCheckRating)
            }
            return healthCheckEntry;
        case "OccupationalHealthcare":
            const occupationalHealthcareEntry: NewOccupationalHealthcareEntry = {
                type: "OccupationalHealthcare",
                description: parseDescription(object.description),
                date: parseDate(object.date),
                specialist: parseSpecialist(object.specialist),
                diagnosisCodes: parseDiagnosisCodes(object.diagnosisCodes),
                employerName: parseEmployerName(object.employerName),
                sickLeave: parseSickLeave(object.sickLeave)
            }
            return occupationalHealthcareEntry;
        default:
            throw new Error('Incorrect entry object');
    }
};

const parseDescription = (description: any): string => {
    if (!description || !isString(description)) {
        throw new Error('Incorrect or missing description: ' + description);
    }

    return description;
};

const parseSpecialist = (specialist: any): string => {
    if (!specialist || !isString(specialist)) {
        throw new Error('Incorrect or missing specialist: ' + specialist);
    }

    return specialist;
};

const parseDate = (date: any): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const parseEmployerName = (employerName: any): string => {
    if (!employerName || !isString(employerName)) {
        throw new Error('Incorrect or missing employer name: ' + employerName);
    }
    return employerName;
}

const parseSickLeave = (sickLeave: any): SickLeave => {
    if (!sickLeave || !sickLeave.startDate || !sickLeave.endDate) {
        throw new Error('Missing sickLeave');
    }

    if (!isDate(sickLeave.startDate)) {
        throw new Error('Incorrect sickLeave start date: ' + sickLeave.startDate);
    }

    if (!isDate(sickLeave.endDate)) {
        throw new Error('Incorrect sickLeave end date: ' + sickLeave.endDate);
    }

    const newSickLeave: SickLeave = {
        startDate: sickLeave.startDate,
        endDate: sickLeave.endDate,
    }
    return newSickLeave;
}

const parseDiagnosisCodes = (codes: any): Array<string> => {
    if (!codes) {
        throw new Error('Missing diagnosis codes');
    }

    const stringCodes = Array<string>();
    if (Array.isArray(codes)) {
        //let codeIsNotString = false;
        codes.forEach(function (item) {
            if (typeof item !== 'string') {
                //codeIsNotString = true;
                throw new Error('Incorrect code: ' + item);
            } else {
                stringCodes.push(item);
            }
        })
    }
    return stringCodes;
};

const parseDischarge = (discharge: any): Discharge => {
    if (!discharge) {
        throw new Error('Incorrect or missing discharge');
    }

    if (!discharge.criteria || !isString(discharge.criteria)) {
        throw new Error('Incorrect or missing discharge criteria: ' + discharge.criteria);
    }

    if (!discharge.date || !isDate(discharge.date)) {
        throw new Error('Incorrect or missing discharge date: ' + discharge.date);
    }

    const newDischarge: Discharge = {
        criteria: discharge.criteria,
        date: discharge.date
    }
    return newDischarge;
};

const parseHealthCheckRating = (rating: any): HealthCheckRating => {
    if (!rating || !isHealthCheckRating(rating)) {
        throw new Error('Incorrect or missing rating: ' + rating);
    }
    return rating;
};

const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isHealthCheckRating = (param: any): param is HealthCheckRating => {
    return Object.values(HealthCheckRating).includes(param);
};

export default toNewVisitEntry;