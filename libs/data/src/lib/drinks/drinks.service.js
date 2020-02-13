import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let DrinksService = class DrinksService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.model = 'drinks';
    }
    getUrl(...params) {
        return `https://server-30-x-30.herokuapp.com/${this.model}/${params.join('/')}`;
    }
    all() {
        return this.httpClient.get(this.getUrl());
    }
    get(id) {
        return this.httpClient.get(this.getUrl(id));
    }
    create(drink) {
        return this.httpClient.post(this.getUrl(), drink);
    }
    update(drink) {
        return this.httpClient.patch(this.getUrl(drink.id), drink);
    }
    delete(id) {
        return this.httpClient.delete(this.getUrl(id));
    }
};
DrinksService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], DrinksService);
export { DrinksService };
//# sourceMappingURL=drinks.service.js.map