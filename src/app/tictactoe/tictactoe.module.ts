import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TictactoeComponent } from './tictactoe.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { TictactoeRoutes } from './tictactoe.routing';

@NgModule({
  imports: [
    CommonModule,
    TictactoeRoutes
    
    
  ],
  declarations: [
    TictactoeComponent,
    SquareComponent,
    BoardComponent
  ],
  exports:[]
})
export class TictactoeModule { }
