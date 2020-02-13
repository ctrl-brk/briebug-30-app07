import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code404',
  templateUrl: './code404.component.html',
})
export class Code404Component {

  constructor(private router: Router) { }

  redirectToDrinks() {
    // noinspection JSIgnoredPromiseFromCall
    this.router.navigate(['/drinks']);
  }
}
