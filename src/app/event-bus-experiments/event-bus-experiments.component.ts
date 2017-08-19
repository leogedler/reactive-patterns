import { testLessons } from './../shared/model/test-lessons';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './evet-bus';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Top level component bradcasted all lessons...');
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, testLessons.slice(0))
  }


  addLesson(lessonText: string) {
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }

}
