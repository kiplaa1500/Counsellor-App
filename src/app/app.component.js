import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(
    // private userService: UserService,
    userService, router) {
        this.userService = userService;
        this.router = router;
        this.title = 'Counsellor';
    }
    // appointmentlist!: Appointments[];
    ngOnInit() {
        // this.counsellorService.getappointments().
        //   subscribe
        //   (
        //     data =>
        //     {
        //       this.appointmentlist = data;
        //      })
    }
    logout() {
        this.userService.signOut();
        this.router.navigate(['/home']);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map