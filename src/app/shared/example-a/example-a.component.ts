import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  styleUrls: ['./example-a.component.css']
})
export class ExampleAComponent implements OnInit {

  public title = 'whatever';
  @Input() public headline: String = '';

  constructor() {
    this.title += ' lashdfasdöogfas';
   }

  ngOnInit() {
  }

}
