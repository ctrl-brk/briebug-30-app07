import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '@app/auth';
import { DrinksComponent } from './drinks/drinks.component';
import { Code404Component } from '@app/error-pages';
const routes = [
    { path: '', component: LoginComponent },
    { path: 'drinks', component: DrinksComponent },
    { path: 'login', component: LoginComponent },
    { path: 'notfound', component: Code404Component },
    { path: '**', redirectTo: 'notfound', pathMatch: 'full' }
];
let RoutingModule = class RoutingModule {
};
RoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes),],
        exports: [RouterModule]
    })
], RoutingModule);
export { RoutingModule };
//# sourceMappingURL=routing.module.js.map