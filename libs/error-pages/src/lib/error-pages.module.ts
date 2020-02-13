import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Code404Component } from './code404/code404.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [Code404Component],
  exports: [Code404Component]
})
export class ErrorPagesModule {}
