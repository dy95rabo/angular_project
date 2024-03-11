import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TictactoeModule } from './tictactoe/tictactoe.module';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule,
    // RouterModule,
    TictactoeModule,
    NavigationComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_project';
}
