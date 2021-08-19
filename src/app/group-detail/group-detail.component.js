import { __decorate } from "tslib";
import { Component } from '@angular/core';
let GroupDetailComponent = class GroupDetailComponent {
    constructor(route, heroService, router, tokenStorage) {
        this.route = route;
        this.heroService = heroService;
        this.router = router;
        this.tokenStorage = tokenStorage;
    }
    ngOnInit() {
        this.getGroup();
        console.log("Group");
    }
    getGroup() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.heroService.getGroups(id)
            .subscribe(group => this.group = group);
        console.log(this.group);
    }
    getClients() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.heroService.getClients(id)
            .subscribe((clients) => {
            this.clients = clients;
        });
    }
    getMessages() {
        const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.heroService.getMessages(id)
            .subscribe((messages) => {
            this.messages = messages;
        });
    }
};
GroupDetailComponent = __decorate([
    Component({
        selector: 'app-group-detail',
        templateUrl: './group-detail.component.html',
        styleUrls: ['./group-detail.component.css']
    })
], GroupDetailComponent);
export { GroupDetailComponent };
//# sourceMappingURL=group-detail.component.js.map