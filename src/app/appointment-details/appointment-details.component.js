import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppointmentDetailsComponent = class AppointmentDetailsComponent {
    constructor(route, appointmentDetails) {
        this.route = route;
        this.appointmentDetails = appointmentDetails;
    }
    ngOnInit() {
        this.getAppointment();
    }
    getAppointment() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.appointmentDetails.getAppointments(id)
            .subscribe(appointment => this.appointment = appointment);
    }
};
AppointmentDetailsComponent = __decorate([
    Component({
        selector: 'app-appointment-details',
        templateUrl: './appointment-details.component.html',
        styleUrls: ['./appointment-details.component.css']
    })
], AppointmentDetailsComponent);
export { AppointmentDetailsComponent };
//# sourceMappingURL=appointment-details.component.js.map