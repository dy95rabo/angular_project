import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExampleAComponent } from './shared/example-a/example-a.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'testroute', component: ExampleAComponent },
    { path: 'tictactoe', component: TictactoeComponent },
];
