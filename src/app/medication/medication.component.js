import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Medication } from '../shared/user.model';
let MedicationComponent = class MedicationComponent {
    constructor(prescribe) {
        this.prescribe = prescribe;
        this.prescribeMedicine = new Medication();
    }
    ngOnInit() {
    }
    prescribeMedics() {
        this.prescribe.prescribeMedic(this.prescribeMedicine).subscribe(data => {
            console.log(data);
        });
    }
};
MedicationComponent = __decorate([
    Component({
        selector: 'app-medication',
        templateUrl: './medication.component.html',
        styleUrls: ['./medication.component.css']
    })
], MedicationComponent);
export { MedicationComponent };
//# sourceMappingURL=medication.component.js.map