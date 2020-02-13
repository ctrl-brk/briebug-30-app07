import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DrinksService } from './drinks/drinks.service';
let DataModule = class DataModule {
};
DataModule = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        providers: [DrinksService]
    })
], DataModule);
export { DataModule };
//# sourceMappingURL=data.module.js.map