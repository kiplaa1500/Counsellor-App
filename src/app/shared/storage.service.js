import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
// const LOCATION = 'location';
// const COORDINATES = 'coordinates';
let StorageService = class StorageService {
    constructor() { }
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
};
StorageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StorageService);
export { StorageService };
//# sourceMappingURL=storage.service.js.map