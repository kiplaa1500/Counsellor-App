import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor(http, router, tokenStorageService) {
        this.http = http;
        this.router = router;
        this.tokenStorageService = tokenStorageService;
        this.isLoggedIn = false;
    }
    ngOnInit() {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.username = user.username;
        }
    }
    signOut() {
        localStorage.clear();
        this.router.navigate(['/']);
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map