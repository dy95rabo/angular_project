import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TictactoeComponent } from './tictactoe.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { TictactoeRoutes } from './tictactoe.routing';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TictactoeRoutes,
    NgbAlertModule,
    
    
  ],
  declarations: [
    TictactoeComponent,
    SquareComponent,
    BoardComponent
  ],
  exports:[]
})
export class TictactoeModule { }
