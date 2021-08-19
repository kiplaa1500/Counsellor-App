import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UpdateAppointmentComponent = class UpdateAppointmentComponent {
    // appointment!: Appointment;
    constructor(appointmentDetails, actRoute, router) {
        this.appointmentDetails = appointmentDetails;
        this.actRoute = actRoute;
        this.router = router;
        this.id = this.actRoute.snapshot.params['id'];
        this.appointmentData = {};
    }
    ngOnInit() {
        this.appointmentDetails.getAppointment(this.id).subscribe((data) => {
            this.appointmentData = data;
        });
    }
    // Update appoitment data
    // updateAppointment() {
    //   if (window.confirm('Are you sure, you want to update?')) {
    //     this.restApi.updateAppointment(this.id, this.appointmentData).subscribe(data => {
    //     this.router.navigate(['/counsellor'])
    //     })
    //   }
    // }
    updateAppointment(id, data) {
        if (window.confirm('Are you sure, you want to update?')) {
            this.appointmentDetails.updateAppointment(this.id, data)
                .subscribe(data => {
                console.log("data");
                this.router.navigate(['/counsellor']);
            });
        }
    }
};
UpdateAppointmentComponent = __decorate([
    Component({
        selector: 'app-update-appointment',
        templateUrl: './update-appointment.component.html',
        styleUrls: ['./update-appointment.component.css']
    })
], UpdateAppointmentComponent);
export { UpdateAppointmentComponent };
//# sourceMappingURL=update-appointment.component.js.map