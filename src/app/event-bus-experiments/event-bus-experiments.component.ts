import { Lesson } from './../shared/model/lesson';
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

  private lessons: Lesson[] = [];

  ngOnInit() {
    console.log('Top level component bradcasted all lessons...');

    this.lessons = testLessons.slice(0);

    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons);

    setTimeout(() =>{
      this.lessons.push({
        id: Math.random(),
        description: 'New lesson arriving from the backend'
      });

      globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons);

    }, 10000)

  }


  addLesson(lessonText: string) {
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }

}
