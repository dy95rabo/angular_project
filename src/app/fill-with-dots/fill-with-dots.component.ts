import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-fill-with-dots',
  templateUrl: './fill-with-dots.component.html',
  styleUrls: ['./fill-with-dots.component.css'],
})
export class FillWithDotsComponent implements OnInit, OnDestroy {
  dots = Array.from(Array(160).keys());

  colors = [
    'red',
    'green',
    'blue',
    'pink',
    'purple',
    'orange',
    'yellow',
    ' cyan',
    'magenta',
  ];

  randomColorIndex = 0;

  counter = 25;

  myInterval: any;

  isGameStarted = false;

  cleanCount = 160;
  isGameEnded = false

  isWon = false


  @ViewChildren('dotRefs') dotRefs: QueryList<any> | undefined

  changeStyle(dot: any) {
    this.randomColorIndex = Math.floor(Math.random() * this.colors.length);
    if(!this.isGameEnded&& dot.classList.length==1){
      dot.classList.add(this.colors[this.randomColorIndex]);
      this.checkGameStatus();
    }
  }

  startTimer() {
    this.myInterval = setInterval(() => {
      if(this.counter >1){
        this.counter--;
      }else{
        this.isGameEnded = true
      }
    }, 1000);
  }

  checkGameStatus() {
    this.cleanCount--
    if (!this.isGameStarted) {
      this.startTimer();
      this.isGameStarted = true;
    }
    if(this.cleanCount<= 0){
      this.isWon = true
      this.isGameEnded = true
    }
  }

  constructor() {}

  ngOnDestroy(): void {
    clearInterval(this.myInterval);
    this.isGameStarted = false;
  }

  ngOnInit() {}
}
