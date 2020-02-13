import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  get showTooltip(): boolean {
    return !this.form.valid && (!this.form.pristine || this.form.touched);
  }

  constructor(private _fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    if (this.form.invalid) return;
    // noinspection JSIgnoredPromiseFromCall
    this._router.navigate(['/drinks']);
  }

  private initForm() {
    this.form = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
}
