import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
const TOKEN_HEADER_KEY = 'Authorization';
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor = __decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
//# sourceMappingURL=auth.interceptor.js.map