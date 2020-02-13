import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DrinksService } from './drinks/drinks.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [DrinksService]
})
export class DataModule {}
