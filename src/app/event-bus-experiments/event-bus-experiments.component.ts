import { store } from './app-data';
import { Lesson } from './../shared/model/lesson';
import { testLessons } from './../shared/model/test-lessons';
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

    
    store.initializeLessonList(testLessons.slice(0));

    setTimeout(()=>{
      const newLesson: Lesson = {
        id: Math.random(),
        description: 'New lesson arriving from the backend'
      }

      store.addLesson(newLesson);

    },10000)


  }


  addLesson(lessonText: string) {
    const newLesson: Lesson = {
      id: Math.random(),
      description: lessonText
    }

    store.addLesson(newLesson);
  }

}
