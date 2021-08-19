import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PrescribedComponent = class PrescribedComponent {
    constructor(authService, config, modalService) {
        this.authService = authService;
        this.modalService = modalService;
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }
    // open(content) {
    //   this.modalService.open(content, {
    //     size: 'xl',
    //   });
    // }
    ngOnInit() {
        this.username = localStorage.getItem('username');
        this.user_id = localStorage.getItem('user_id');
        // this.location = localStorage.getItem('location')
        this.authService.getPrescription().subscribe((res) => {
            this.client_name = res;
            this.newArray = this.client_name.filter(clienty => clienty.name === this.username);
            this.medic = this.newArray.reverse();
            this.medication = this.medic[0];
            if (this.medic[0] == undefined) {
                this.medication = [
                    {
                        status: "N/A", recomendations: "None"
                    }
                ];
            }
        });
    }
    patients(patients) {
        throw new Error('Method not implemented.');
    }
};
PrescribedComponent = __decorate([
    Component({
        selector: 'app-prescribed',
        templateUrl: './prescribed.component.html',
        styleUrls: ['./prescribed.component.css']
    })
], PrescribedComponent);
export { PrescribedComponent };
//# sourceMappingURL=prescribed.component.js.map