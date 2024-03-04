import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TictactoeComponent } from './tictactoe.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  imports: [
    CommonModule,
    
    
  ],
  declarations: [
    TictactoeComponent,
    SquareComponent,
    BoardComponent
  ],
  exports:[
    TictactoeComponent,
  ]
})
export class TictactoeModule { }
