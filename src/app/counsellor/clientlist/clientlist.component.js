import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ClientlistComponent = class ClientlistComponent {
    constructor(counsellorService) {
        this.counsellorService = counsellorService;
        this.userList = [];
    }
    ngOnInit() {
        this.counsellorService.getClientList().subscribe(data => {
            console.log(data);
            this.userList = data;
        });
    }
};
ClientlistComponent = __decorate([
    Component({
        selector: 'app-clientlist',
        templateUrl: './clientlist.component.html',
        styleUrls: ['./clientlist.component.css']
    })
], ClientlistComponent);
export { ClientlistComponent };
//# sourceMappingURL=clientlist.component.js.map