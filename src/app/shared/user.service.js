import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
const AUTH_API = " https://jose-counsellor.herokuapp.com/";
const MEDIC_API = " https://jose-counsellor.herokuapp.com/";
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let UserService = class UserService {
    // getStatus() {
    //   throw new Error('Method not implemented.');
    // }
    // private loggedIn: boolean = false;
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    login(email, password) {
        return this.http.post(AUTH_API + 'login', {
            email,
            password
        }, httpOptions);
    }
    // login(userdata: any): Observable<any> {
    //   return this.http.post(AUTH_API + 'login', userdata)
    // }
    register(username, email, firstName, lastName, password, role) {
        return this.http.post(AUTH_API + 'register', {
            username,
            email,
            firstName,
            lastName,
            password,
            role,
        }, httpOptions);
    }
    // this.authService.register(username, email, phone, role = 'is_patient', password).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //     this.router.navigate(['home/signin']);
    //   },
    //   (err) => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
    signOut() {
        localStorage.clear();
        this.router.navigate(['/']);
    }
    getPrescription() {
        return this.http.get(MEDIC_API + 'medicine/');
    }
    getClients() {
        return this.http.get(AUTH_API + 'api/book/');
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map