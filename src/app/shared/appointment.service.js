import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let AppointmentService = class AppointmentService {
    constructor(http) {
        this.http = http;
        this.api_url = "https://jose-counsellor.herokuapp.com/";
    }
    // getAppointments(): Observable<Appointment[]> {
    //   return this.http.get<Appointment[]>(`${this.BASE_URL}/appointments`);
    // }
    // bookSession(date: Date, timeStart: string, timeEnd: string, message: string): Observable<Appointment> {
    //   return this.http.post<Appointment>(`${this.BASE_URL}/api/book-appointment`, { date, timeStart, timeEnd, message });
    // }
    // cancelAppointment(id: string): Observable<any> {
    //   return this.http.delete(`${this.BASE_URL}/appointments/${id}`);
    // }
    bookSession(appointment) {
        const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer access' };
        const body = JSON.stringify(appointment);
        console.log(body);
        return this.http.post(this.api_url + 'api/book/', body, { 'headers': headers, observe: 'response' }).pipe(catchError((err) => {
            console.error(err);
            throw err;
        }));
    }
    updateAppointment(appointment) {
        return this.http.patch(this.api_url, appointment, httpOptions);
        console.log(appointment);
    }
    deleteAppointment(id) {
        const url = `${this.api_url}/${id}`; // DELETE api/heroes/42
        return this.http.delete(url, httpOptions);
    }
};
AppointmentService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AppointmentService);
export { AppointmentService };
//# sourceMappingURL=appointment.service.js.map