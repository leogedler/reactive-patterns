import { store } from './../event-bus-experiments/app-data';
import { Lesson } from './../shared/model/lesson';
import { Observer } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer<Lesson[]> {

  lessons: Lesson[] = [];

  constructor() {}

  ngOnInit() {
    console.log('Lessons list component is registed as observer...');
    
    store.lessonList$.subscribe(this);
  }

  next(data:Lesson[]){
    console.log('Lessons list component received data...');
    this.lessons = data;
  }

  error(err:any){
    console.log(err);
  }

  complete(){
    console.log('completed');
  }

  toggleLessonViewed(lesson:Lesson) {
    console.log('toggling lesson ...');
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson){
    console.log('deleting lesson ...');
   store.delete(deleted);
  }

}
