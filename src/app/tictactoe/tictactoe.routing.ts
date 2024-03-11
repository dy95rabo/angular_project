import { Routes, RouterModule } from '@angular/router';
import { TictactoeComponent } from './tictactoe.component';

const routes: Routes = [
  {
     path: '',
     pathMatch:'full',
     component: TictactoeComponent
    },
];

export const TictactoeRoutes = RouterModule.forChild(routes);
