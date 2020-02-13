import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
let LoginComponent = class LoginComponent {
    constructor(_fb, _router) {
        this._fb = _fb;
        this._router = _router;
    }
    ngOnInit() {
        this.initForm();
    }
    login() {
        if (this.form.invalid)
            return;
        // noinspection JSIgnoredPromiseFromCall
        this._router.navigate(['/drinks']);
    }
    initForm() {
        this.form = this._fb.group({
            username: [''],
            password: ['']
        });
    }
};
LoginComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'auth-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    __metadata("design:paramtypes", [FormBuilder, Router])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map