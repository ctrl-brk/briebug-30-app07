import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
// @ts-ignore
import { DrinksService } from '@app/data';
let DrinksComponent = class DrinksComponent {
    constructor(drinksService) {
        this.drinksService = drinksService;
    }
    resetDrink() {
        const emptyDrink = {
            id: null,
            title: '',
            details: '',
            coolLevel: 1,
            approved: false
        };
        this.selectDrink(emptyDrink);
    }
    ngOnInit() {
        this.getDrinks();
        this.resetDrink();
    }
    selectDrink(drink) {
        this.selectedDrink = drink;
    }
    getDrinks() {
        this.drinks$ = this.drinksService.all();
    }
    saveDrink(drink) {
        if (!drink.id) {
            this.createDrink(drink);
        }
        else {
            this.updateDrink(drink);
        }
    }
    updateDrink(drink) {
        this.drinksService.update(drink)
            .subscribe(() => {
            this.getDrinks();
            this.resetDrink();
        });
    }
    createDrink(drink) {
        this.drinksService.create(drink)
            .subscribe(() => {
            this.getDrinks();
            this.resetDrink();
        });
    }
    deleteDrink(drink) {
        this.drinksService.delete(drink.id)
            .subscribe(() => this.getDrinks());
    }
    cancel() {
        this.resetDrink();
    }
};
DrinksComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'app-drinks',
        templateUrl: './drinks.component.html'
    }),
    __metadata("design:paramtypes", [DrinksService])
], DrinksComponent);
export { DrinksComponent };
//# sourceMappingURL=drinks.component.js.map