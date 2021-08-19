import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SignInComponent = class SignInComponent {
    constructor(userService, router, tokenStorage, toastr) {
        this.userService = userService;
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.toastr = toastr;
        this.form = {
            email: null,
            password: null
        };
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.role = [];
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.role = this.tokenStorage.getUser().role;
        }
        this.form = {
            email: '',
            password: '',
            username: ''
        };
    }
    onSubmit(signInForm) {
        const { email, password } = this.form;
        this.userService.login(email, password).subscribe(data => {
            // sessionStorage.setItem('user_id', data.user_id);
            // // var data = sessionStorage.getItem('id');
            // console.log(data);
            this.tokenStorage.saveUser(data.email);
            this.tokenStorage.saveUser(data.username);
            this.tokenStorage.saveUser(data.role);
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
            console.log(data.authenticatedUser["role"]);
            // this.isLoginFailed = false;
            // this.isLoggedIn = true;
            if (data.authenticatedUser['role'] === "is_counsellor") {
                this.toastr.success("SignIn succesfully");
                this.router.navigate(['counsellor']);
            }
            else {
                this.toastr.success("SignIn succesfully");
                this.router.navigate(['home']);
            }
        }, err => {
            this.toastr.warning("SignIn fail, please provide correct login credentials");
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
SignInComponent = __decorate([
    Component({
        selector: 'app-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.css']
    })
], SignInComponent);
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map