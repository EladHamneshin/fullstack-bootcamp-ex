"use strict";
class Person {
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    display() {
        console.log(`first name: ${this.firstName}, last name: ${this.lastName}`);
    }
}
class Patient extends Person {
    get patientId() {
        return this._patientId;
    }
    set patientId(patientId) {
        this._patientId = patientId;
    }
    constructor(firstName, lastName, patientId) {
        super(firstName, lastName);
        this._patientId = patientId;
    }
    display() {
        super.display();
        console.log(`patient id: ${this.patientId}`);
    }
}
class Doctor extends Person {
    get doctorId() {
        return this._doctorId;
    }
    set doctorId(doctorId) {
        this._doctorId = doctorId;
    }
    constructor(firstName, lastName, doctorId, spacecialization) {
        super(firstName, lastName);
        this._doctorId = doctorId;
        this.spacecialization = spacecialization;
    }
    display() {
        super.display();
        console.log(`doctor id: ${this.doctorId}, spacecialization: ${this.spacecialization}`);
    }
}
class Appointment {
    constructor(patient, doctor, date, time) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }
    display() {
        this.patient.display();
        this.doctor.display();
        console.log(`date: ${this.date}, time: ${this.time}`);
    }
}
class Hospital {
    constructor(name, doctors, patients, appointments) {
        this.name = name;
        this.doctors = doctors;
        this.patients = patients;
        this.appointments = appointments;
    }
    addDoctor(doctor) {
        this.doctors.push(doctor);
    }
    addPatient(patient) {
        this.patients.push(patient);
    }
    addAppointment(appointment) {
        this.appointments.push(appointment);
    }
    displayAppointments() {
        this.appointments.forEach(appointment => {
            appointment.display();
        });
    }
    displayAppointmentsByDoctorId(doctorId) {
        this.appointments.forEach(appointment => {
            if (appointment.doctor.doctorId == doctorId) {
                appointment.display();
            }
        });
    }
    displayAppointmentsByPatientId(patientId) {
        this.appointments.forEach(appointment => {
            if (appointment.patient.patientId == patientId) {
                appointment.display();
            }
        });
    }
    displayTodayAppointments() {
        this.appointments.forEach(appointment => {
            if (appointment.date == new Date()) {
                appointment.display();
            }
        });
    }
    display() {
        this.doctors.forEach(doctor => {
            doctor.display();
        });
        this.patients.forEach(patient => {
            patient.display();
        });
        this.appointments.forEach(appointment => {
            appointment.display();
        });
    }
}
//generate 10 doctors and 10 patients and 10 appointments and a hospital
let doctors = [];
let patients = [];
let appointments = [];
let hospital = new Hospital("hospital", doctors, patients, appointments);
for (let i = 0; i < 10; i++) {
    let doctor = new Doctor(`doctor${i}`, `doctor${i}`, i, `doctor${i}`);
    let patient = new Patient(`patient${i}`, `patient${i}`, i);
    let appointment = new Appointment(patient, doctor, new Date(), `1${i}:00`);
    hospital.addDoctor(doctor);
    hospital.addPatient(patient);
    hospital.addAppointment(appointment);
}
//display all appointments
hospital.displayAppointments();
//display all appointments by doctor id
hospital.displayAppointmentsByDoctorId(5);
//display all appointments by patient id
hospital.displayAppointmentsByPatientId(5);
//display all appointments by today
hospital.displayTodayAppointments();
//display all doctors, patients and appointments
hospital.display();
