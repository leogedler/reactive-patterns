import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Lesson } from './../shared/model/lesson';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LessonsPagerService {

  private static readonly PAGE_SIZE = 2;

  private subject = new BehaviorSubject<Lesson[]>([]);

  lessonPage$: Observable<Lesson[]> = this.subject.asObservable();

  currentPageNumber = 1;

  private courseId: number;

  constructor(private http: Http) {
    console.log('LessonsPagerService instance created..')
   }

  loadFirstPage(courseId: number){
    this.courseId = courseId;
    this.currentPageNumber = 1;
    this.loadPage(this.currentPageNumber);
  }

  previous(){
    if(this.currentPageNumber -1 >= 1) {
      this.currentPageNumber -= 1; 
      this.loadPage(this.currentPageNumber);
    }
  }
  next(){
    this.currentPageNumber += 1; 
    this.loadPage(this.currentPageNumber);
  }

  loadPage(pageNumber: number){
    this.http.get('/api/lessons', {
      params: {
        courseId: this.courseId,
        pageNumber,
        pageSize: LessonsPagerService.PAGE_SIZE
      }
    })
    .map(res => res.json().payload)
    .subscribe(
      lessons => this.subject.next(lessons)
    )
  }

}
