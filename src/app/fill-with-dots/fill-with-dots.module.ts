import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillWithDotsComponent } from './fill-with-dots.component';
import { FillWithDotsRoutes } from './fill-with-dots.routing';

@NgModule({
  imports: [
    CommonModule,
    FillWithDotsRoutes,

  ],
  declarations: [
    FillWithDotsComponent,
    
  ]
})
export class FillWithDotsModule { }
