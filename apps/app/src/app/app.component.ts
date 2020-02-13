import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cheers!';

  links = [
    { path: '/drinks', icon: 'local_bar', title: 'Drinks' },
  ]
}
