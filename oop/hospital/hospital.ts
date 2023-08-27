abstract class Person{

    private _firstName:string;
    private _lastName:string;

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    private set firstName(firstName:string){
        this._firstName = firstName;
    }

    private set lastName(lastName:string){
        this._lastName = lastName;
    }

    constructor(firstName:string, lastName:string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    display(){
        console.log(`first name: ${this.firstName}, last name: ${this.lastName}`);
    }
}

class Patient extends Person{

    private _patientId:number;

    get patientId(){
        return this._patientId;
    }

    private set patientId(patientId:number){
        this._patientId = patientId;
    }

    constructor(firstName:string, lastName:string, patientId:number){
        super(firstName, lastName);
        this._patientId = patientId;
    }

    display(){
        super.display();
        console.log(`patient id: ${this.patientId}`);
    }
}


class Doctor extends Person{
    private _doctorId:number;

    get doctorId(){
        return this._doctorId;
    }

    private set doctorId(doctorId:number){
        this._doctorId = doctorId;
    }

    spacecialization:string;
    constructor(firstName:string, lastName:string, doctorId:number, spacecialization:string){
        super(firstName, lastName);
        this._doctorId = doctorId;
        this.spacecialization = spacecialization;
    }

    display(){
        super.display();
        console.log(`doctor id: ${this.doctorId}, spacecialization: ${this.spacecialization}`);
    }
}

class Appointment{
    patient:Patient;
    doctor:Doctor;
    date:Date;
    time:string;
    constructor(patient:Patient, doctor:Doctor, date:Date, time:string){
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }

    display(){
        this.patient.display();
        this.doctor.display();
        console.log(`date: ${this.date}, time: ${this.time}`);
    }
}

class Hospital{
    name:string;
    doctors:Doctor[];
    patients:Patient[];
    appointments:Appointment[];

    constructor (name:string, doctors:Doctor[], patients:Patient[], appointments:Appointment[]){
        this.name = name;
        this.doctors = doctors;
        this.patients = patients;
        this.appointments = appointments;
    }


    addDoctor(doctor:Doctor){
        this.doctors.push(doctor);
    }

    addPatient(patient:Patient){
        this.patients.push(patient);
    }

    addAppointment(appointment:Appointment){
        this.appointments.push(appointment);
    }

    displayAppointments(){
        this.appointments.forEach(appointment => {
            appointment.display();
        });
    } 

    displayAppointmentsByDoctorId(doctorId:number){
        this.appointments.forEach(appointment => {
            if(appointment.doctor.doctorId == doctorId){
                appointment.display();
            }
        });
    }

    displayAppointmentsByPatientId(patientId:number){
        this.appointments.forEach(appointment => {
            if(appointment.patient.patientId == patientId){
                appointment.display();
            }
        });
    }

    displayTodayAppointments(){
        this.appointments.forEach(appointment => {
            if(appointment.date == new Date()){
                appointment.display();
            }
        });
    }

    display(){
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
let doctors:Doctor[] = [];
let patients:Patient[] = [];
let appointments:Appointment[] = [];
let hospital:Hospital = new Hospital("hospital", doctors, patients, appointments);

for(let i = 0; i < 10; i++){
    let doctor:Doctor = new Doctor(`doctor${i}`, `doctor${i}`, i, `doctor${i}`);
    let patient:Patient = new Patient(`patient${i}`, `patient${i}`, i);
    let appointment:Appointment = new Appointment(patient, doctor, new Date(), `1${i}:00`);
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