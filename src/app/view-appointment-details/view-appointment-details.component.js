import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ViewAppointmentDetailsComponent = class ViewAppointmentDetailsComponent {
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
ViewAppointmentDetailsComponent = __decorate([
    Component({
        selector: 'app-view-appointment-details',
        templateUrl: './view-appointment-details.component.html',
        styleUrls: ['./view-appointment-details.component.css']
    })
], ViewAppointmentDetailsComponent);
export { ViewAppointmentDetailsComponent };
//# sourceMappingURL=view-appointment-details.component.js.map