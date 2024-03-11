import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExampleAComponent } from './shared/example-a/example-a.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'testroute', component: ExampleAComponent },
    {
        path:'tictactoe',
        loadChildren: () =>import('./tictactoe/tictactoe.module').then((m:any)=>m.TictactoeModule)
    },
];
