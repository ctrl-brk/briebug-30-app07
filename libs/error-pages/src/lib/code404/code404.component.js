import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let Code404Component = class Code404Component {
    constructor(router) {
        this.router = router;
    }
    redirectToDrinks() {
        // noinspection JSIgnoredPromiseFromCall
        this.router.navigate(['/drinks']);
    }
};
Code404Component = __decorate([
    Component({
        selector: 'app-code404',
        templateUrl: './code404.component.html',
        styleUrls: ['./code404.component.scss']
    }),
    __metadata("design:paramtypes", [Router])
], Code404Component);
export { Code404Component };
//# sourceMappingURL=code404.component.js.map