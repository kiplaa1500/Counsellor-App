import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ViewAppointmentComponent = class ViewAppointmentComponent {
    constructor(counsellorService) {
        this.counsellorService = counsellorService;
    }
    // userList!: Users[];
    ngOnInit() {
        this.counsellorService.getappointments().
            subscribe(data => {
            this.appointmentlist = data;
        });
    }
};
ViewAppointmentComponent = __decorate([
    Component({
        selector: 'app-view-appointment',
        templateUrl: './view-appointment.component.html',
        styleUrls: ['./view-appointment.component.css']
    })
], ViewAppointmentComponent);
export { ViewAppointmentComponent };
//# sourceMappingURL=view-appointment.component.js.map