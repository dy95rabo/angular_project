import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExampleAComponent } from './shared/example-a/example-a.component';

const routes: Routes = [
    { 
        path: '',
        component: HomeComponent 
    },
    {
         path: 'testroute', 
         component: ExampleAComponent 
    },
    {
        path:'tictactoe',
        loadChildren: () =>import('./tictactoe/tictactoe.module').then((m:any)=>m.TictactoeModule)
    },
    {
        path:'fill-with-dots',
        loadChildren: () =>import('./fill-with-dots/fill-with-dots.module').then((m:any)=>m.FillWithDotsModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }