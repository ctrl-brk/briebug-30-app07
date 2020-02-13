import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Cheers!';
        this.links = [
            { path: '/drinks', icon: 'local_bar', title: 'Drinks' },
        ];
    }
};
AppComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map