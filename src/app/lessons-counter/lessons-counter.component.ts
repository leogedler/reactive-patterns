import { Lesson } from './../shared/model/lesson';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './../event-bus-experiments/evet-bus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements OnInit {

  lessonsCounter = 0;
  
  constructor() {
      console.log('lesson list component is registered as observer ..');
      globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

      globalEventBus.registerObserver(ADD_NEW_LESSON, {
          notify: lessonText => this.lessonsCounter += 1
      } );
  }

  ngOnInit() {
  }


  notify(data: Lesson[]) {
      console.log('counter component received data ..');
      this.lessonsCounter = data.length;
  }

}
