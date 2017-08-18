import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {

  hoverSertion: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.hoverSertion = document.getElementById('hover');

    this.hoverSertion.addEventListener('mousemove', this.onMousemove)
  }

  unsubscribe(){
    console.log('Colled unsubscribe');
    this.hoverSertion.removeEventListener('mousemove', this.onMousemove)
  }

  onMousemove(ev){
    console.log(ev);
  }

}
