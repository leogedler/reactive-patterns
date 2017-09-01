import { CoursesService } from './../services/courses.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CourseDetailResolver implements Resolve<[Course, (Lesson[])]>{

    constructor(private coursesService: CoursesService){}


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
        return this.coursesService.findCourseByUrl(route.params['id'])
        .switchMap(course => this.coursesService.findLessonsForCourse(course.id),
        (course, lessons)=> [course, lessons]);
    }
}