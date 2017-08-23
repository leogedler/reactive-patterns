import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  findAllCourses(): Observable<Course[]>{
    return this.db.list('courses')
    .first() // Just receive one stream of data and then unsubscribe to the scream
    .do(console.log);
  }

  findLatestLessons(): Observable<Lesson[]>{
    return this.db.list('lessons', {
      query: {
          orderByKey: true,
          limitToLast: 10
        }
      })
      .first()
      .do(console.log);
  }

  findCourseByUrl(courseUrl:string): Observable<Course>{
    return  this.db.list('courses', {
      query: {
          orderByChild: 'url',
          equalTo: courseUrl
      }
    })
    .first()
    .map( data => data[0])
  }

  findLessonsForCourse(courseId:string): Observable<Lesson[]>{
    return  this.db.list('lessons', {
        query: {
            orderByChild: 'courseId',
            equalTo: courseId
        }
    })
    .first()
  }


}
