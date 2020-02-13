import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let DrinksListComponent = class DrinksListComponent {
    constructor() {
        this.readonly = false;
        this.selected = new EventEmitter();
        this.deleted = new EventEmitter();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], DrinksListComponent.prototype, "drinks", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DrinksListComponent.prototype, "readonly", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DrinksListComponent.prototype, "selected", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DrinksListComponent.prototype, "deleted", void 0);
DrinksListComponent = __decorate([
    Component({
        selector: 'app-drinks-list',
        templateUrl: './drinks-list.component.html',
        styleUrls: ['./drinks-list.component.scss']
    })
], DrinksListComponent);
export { DrinksListComponent };
//# sourceMappingURL=drinks-list.component.js.map