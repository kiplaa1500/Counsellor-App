import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Appointment } from '../shared/user.model';
let AppointmentsComponent = class AppointmentsComponent {
    constructor(bookService) {
        this.bookService = bookService;
        // bookAppointment!: Appointment
        this.bookAppointment = new Appointment("", 0, new Date(), "", "", "");
    }
    ngOnInit() {
    }
    bookSession() {
        if (window.confirm('Are you sure, you want to book an appointment?')) {
            this.bookService.bookSession(this.bookAppointment).subscribe(data => {
                console.log(data);
            });
            window.location.reload();
        }
    }
};
AppointmentsComponent = __decorate([
    Component({
        selector: 'app-appointments',
        templateUrl: './appointments.component.html',
        styleUrls: ['./appointments.component.css']
    })
], AppointmentsComponent);
export { AppointmentsComponent };
//# sourceMappingURL=appointments.component.js.map