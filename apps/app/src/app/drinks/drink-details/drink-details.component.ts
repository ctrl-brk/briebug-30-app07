import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Drink, DrinksService } from '@app/data';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html'
})
export class DrinkDetailsComponent implements OnInit {
  form: FormGroup;
  private _drinkId: number;
  private _drink: Drink;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input()
  get drinkId(): number {
    return this._drinkId;
  }
  set drinkId(id: number) {
    if (!id) {
      this._drink = null;
      this.initForm();
      return;
    }

    this._drinkId = id;
    this._svcDrinks.get(id).subscribe(x => {
        this._drink = x;
        this.initForm();
      },
      (e: HttpErrorResponse) => {
        if (e.status === 404)
          this._snackBar.open(`Drink id ${this._drinkId} not found`, 'close', {duration: 2000});
        else
          alert(e.message);
      }
    );
  }

  get drink(): Drink {
    return this._drink;
  }

  get showTooltip(): boolean {
    return !this.form.valid && (!this.form.pristine || this.form.touched);
  }

  constructor(private _fb: FormBuilder, private _svcDrinks: DrinksService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = this._fb.group({
      id: [this._drink?.id],
      title: [this._drink?.title, Validators.required],
      details: [this._drink?.details, Validators.required],
    });
  }

  onSubmit() {
    this.saved.emit(this.form.value);
  }

  onCancel() {
    this.cancelled.emit(this.form.value);
  }
}
