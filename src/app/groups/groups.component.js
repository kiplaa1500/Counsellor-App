import { __decorate } from "tslib";
import { Component } from '@angular/core';
let GroupsComponent = class GroupsComponent {
    constructor(bookService, counsellorService, toastr) {
        this.bookService = bookService;
        this.counsellorService = counsellorService;
        this.toastr = toastr;
        this.userList = [];
        this.newGroup = {
            name: null,
            description: null,
            client_name: null
        };
    }
    ngOnInit() {
        this.counsellorService.getClientList().subscribe(data => {
            console.log(data);
            this.userList = data;
        });
    }
    creategroup() {
        this.toastr.success("Group created succesfully");
        this.bookService.creategroups(this.newGroup).subscribe(data => {
            console.log(data);
        });
        window.location.reload();
    }
    addGroup() { }
};
GroupsComponent = __decorate([
    Component({
        selector: 'app-groups',
        templateUrl: './groups.component.html',
        styleUrls: ['./groups.component.css']
    })
], GroupsComponent);
export { GroupsComponent };
//# sourceMappingURL=groups.component.js.map