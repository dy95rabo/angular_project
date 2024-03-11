import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true,
  imports:[
    RouterModule,
  ]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
