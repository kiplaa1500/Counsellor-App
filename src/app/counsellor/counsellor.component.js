import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CounsellorComponent = class CounsellorComponent {
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
CounsellorComponent = __decorate([
    Component({
        selector: 'app-counsellor',
        templateUrl: './counsellor.component.html',
        styleUrls: ['./counsellor.component.css']
    })
], CounsellorComponent);
export { CounsellorComponent };
//# sourceMappingURL=counsellor.component.js.map