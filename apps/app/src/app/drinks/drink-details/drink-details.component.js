import { __decorate, __metadata } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
let DrinkDetailsComponent = class DrinkDetailsComponent {
    constructor(_fb) {
        this._fb = _fb;
        this.saved = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    set drink(value) {
        if (value)
            this.originalTitle = value.title;
        this.currentDrink = Object.assign({}, value);
        this.initForm();
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        var _a, _b;
        this.form = this._fb.group({
            title: [(_a = this.currentDrink) === null || _a === void 0 ? void 0 : _a.title],
            details: [(_b = this.currentDrink) === null || _b === void 0 ? void 0 : _b.details],
        });
    }
    onSubmit() {
        this.saved.emit(this.form.value);
    }
    onCancel() {
        this.cancelled.emit(this.form.value);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], DrinkDetailsComponent.prototype, "saved", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DrinkDetailsComponent.prototype, "cancelled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DrinkDetailsComponent.prototype, "drink", null);
DrinkDetailsComponent = __decorate([
    Component({
        selector: 'app-drink-details',
        templateUrl: './drink-details.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder])
], DrinkDetailsComponent);
export { DrinkDetailsComponent };
//# sourceMappingURL=drink-details.component.js.map