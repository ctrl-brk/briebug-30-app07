import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Code404Component } from './code404/code404.component';
import { MatButtonModule } from '@angular/material/button';
let ErrorPagesModule = class ErrorPagesModule {
};
ErrorPagesModule = __decorate([
    NgModule({
        imports: [CommonModule, MatButtonModule],
        declarations: [Code404Component],
        exports: [Code404Component]
    })
], ErrorPagesModule);
export { ErrorPagesModule };
//# sourceMappingURL=error-pages.module.js.map