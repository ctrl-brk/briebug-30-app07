import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DrinksService } from '@app/data';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html'
})
export class DrinksComponent implements OnInit, OnDestroy {
  private _routeSub: Subscription;
  drinkId: number;
  drinks$;

  constructor(private _drinksService: DrinksService, private _router: Router, private _route: ActivatedRoute, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this._routeSub = this._route.params.subscribe(
      params => {
        if ( !isNaN(+params['id']) )
          this.drinkId = +params['id'];
        else
          this._snackBar.open(`Invalid drink id ${params['id']}`, 'close', {duration: 2000});
      }
    );

    this.getDrinks();
  }

  resetDrink() {
    this.selectDrink({id: null});
  }

  selectDrink(drink) {
    this.drinkId = drink.id;
  }

  getDrinks() {
    this.drinks$ = this._drinksService.all();
  }

  saveDrink(drink) {
    if (!drink.id) {
      this.createDrink(drink);
    } else {
      this.updateDrink(drink);
    }
  }

  updateDrink(drink) {
    this._drinksService.update(drink)
      .subscribe(() => {
        this.getDrinks();
        this.resetDrink();
      });
  }

  createDrink(drink) {
    this._drinksService.create(drink)
      .subscribe(() => {
        this.getDrinks();
        this.resetDrink();
      });
  }

  deleteDrink(drink) {
    this._drinksService.delete(drink.id)
      .subscribe(() => this.getDrinks());
  }

  cancel() {
    this.resetDrink();
  }

  ngOnDestroy() {
    this._routeSub.unsubscribe();
  }
}
