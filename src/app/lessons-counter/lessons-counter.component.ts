import { Observer, store } from './../event-bus-experiments/app-data';
import { Lesson } from './../shared/model/lesson';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit, Observer {

  lessonsCounter = 0;
  
  constructor() {}

  ngOnInit() {
    console.log('lesson list component is registered as observer ..');
    
    store.lessonList$.subscribe(this)
  }


  next(data: Lesson[]) {
      console.log('counter component received data ..');
      this.lessonsCounter = data.length;
  }

}
