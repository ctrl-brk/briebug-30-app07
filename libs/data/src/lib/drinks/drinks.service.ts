import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Drink } from './drink';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  model = 'drinks';

  constructor(private httpClient: HttpClient) { }

  getUrl(...params: any[]) {
    return `https://server-30-x-30.herokuapp.com/${this.model}/${params.join('/')}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  get(id): Observable<Drink> {
    return this.httpClient.get(this.getUrl(id)) as Observable<Drink>;
  }

  create(drink: Drink) {
    return this.httpClient.post(this.getUrl(), drink);
  }

  update(drink: Drink) {
    return this.httpClient.patch(this.getUrl(drink.id),drink);
  }

  delete(id) {
    return this.httpClient.delete(this.getUrl(id));
  }
}
