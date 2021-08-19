import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ClientHomeComponent = class ClientHomeComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.groups = [];
    }
    // ngOnInit(): void {
    //   this.username = localStorage.getItem('username')
    // }
    ngOnInit() {
        this.getGroups();
    }
    getGroups() {
        this.heroService.getGroup()
            .subscribe(groups => this.groups = groups);
    }
};
ClientHomeComponent = __decorate([
    Component({
        selector: 'app-client-home',
        templateUrl: './client-home.component.html',
        styleUrls: ['./client-home.component.css']
    })
], ClientHomeComponent);
export { ClientHomeComponent };
//# sourceMappingURL=client-home.component.js.map