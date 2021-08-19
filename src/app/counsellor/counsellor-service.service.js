import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
let CounsellorServiceService = class CounsellorServiceService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.api_url = " https://jose-counsellor.herokuapp.com/";
        this.group_url = " https://jose-counsellor.herokuapp.com/api/groups";
        this.users_url = " https://jose-counsellor.herokuapp.com/clients";
        this.appointment_url = " https://jose-counsellor.herokuapp.com/api/book";
        this.medication_url = " https://jose-counsellor.herokuapp.com/api/medicine/";
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    // getappointments(): Observable<any> {
    //   return this.httpclient.get('http://127.0.0.1:8000/api/book')
    // }
    // users!: Users[]
    creategroups(group) {
        const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer access' };
        const body = JSON.stringify(group);
        console.log(body);
        return this.httpclient.post(this.api_url + 'api/groups/', body, { 'headers': headers, observe: 'response' }).pipe(catchError((err) => {
            console.error(err);
            throw err;
        }));
    }
    getappointments() {
        return this.httpclient.get(this.appointment_url);
    }
    getGroup() {
        return this.httpclient.get(this.group_url);
    }
    getClientList() {
        return this.httpclient.get(this.users_url);
    }
    /** GET groups by id. Will 404 if id not found */
    getGroups(id) {
        const url = `${this.group_url}/${id}`;
        return this.httpclient.get(url);
    }
    getAppointments(id) {
        const url = `${this.appointment_url}/${id}/`;
        return this.httpclient.get(url);
    }
    updateAppointment(id, appointment) {
        return this.httpclient.patch(this.appointment_url + "/" + id + "/", JSON.stringify(appointment), this.httpOptions);
    }
    // return this.httpClient.put<User>(this.endpoint + '/users/' + id
    //   , JSON.stringify(data), this.httpHeader)
    // updateAppointments(id: number): Observable<Appointment> {
    //   const url = `${this.appointment_url}/${id}/`;
    //   return this.httpclient.patch<Appointment>(url)
    // }
    prescribeMedic(medication) {
        const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer access' };
        const body = JSON.stringify(medication);
        console.log(body);
        return this.httpclient.post(this.medication_url, body, { 'headers': headers, observe: 'response' }).pipe(catchError((err) => {
            console.error(err);
            throw err;
        }));
    }
    // updateAppointment(id: number, appointment: string): Observable<Appointment> {
    //   return this.httpclient.post<Appointment>(this.appointment_url + id, JSON.stringify(appointment),httpOptions)
    // }
    // HttpClient API delete() method => Delete appointment 
    deleteAppointment(id) {
        return this.httpclient.delete(this.appointment_url + id, this.httpOptions);
    }
    // HttpClient API get() method => Fetch employee
    getAppointment(id) {
        return this.httpclient.get(this.appointment_url + "/" + id + "/");
    }
    getClients(id) {
        const url = `${this.group_url}/${id}`;
        return this.httpclient.get(url);
    }
    getMessages(id) {
        const url = `${this.group_url}/${id}`;
        return this.httpclient.get(url);
    }
};
CounsellorServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CounsellorServiceService);
export { CounsellorServiceService };
//# sourceMappingURL=counsellor-service.service.js.map