import { Routes, RouterModule } from '@angular/router';
import { FillWithDotsComponent } from './fill-with-dots.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: FillWithDotsComponent
   },
];

export const FillWithDotsRoutes = RouterModule.forChild(routes);
