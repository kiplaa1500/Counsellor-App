import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SignUpComponent = class SignUpComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.form = {
            username: null,
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            role: "is_client",
        };
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        const { username, email, lastName, firstName, password, role, is_counsellor, is_client } = this.form;
        this.userService.register(username, email, firstName, lastName, password, role).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            this.toastr.success('Signup Successful proceed to login');
            this.router.navigate(['/login']);
        }, err => {
            this.toastr.warning('Something went wrong', 'Error');
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
        });
    }
};
SignUpComponent = __decorate([
    Component({
        selector: 'app-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.css']
    })
], SignUpComponent);
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map