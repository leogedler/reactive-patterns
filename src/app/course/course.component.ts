import { LessonsPagerService } from './../services/lessons-pager.service';
import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Observable} from "rxjs";
import {Lesson} from "../shared/model/lesson";
import {CoursesHttpService} from "../services/courses-http.service";
import {Course} from "../shared/model/course";

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    providers: [LessonsPagerService]
})
export class CourseComponent implements OnInit, OnDestroy {

    @Input()
    id: number;

    course$: Observable<Course>;
    lessons$: Observable<Lesson[]>;

    constructor(
        private coursesService: CoursesHttpService,
        private lessonsPagerService: LessonsPagerService) {

    }

    ngOnInit() {
        this.course$ = this.coursesService.findCourseById(this.id);
        this.lessons$ = this.lessonsPagerService.lessonPage$;

        this.lessonsPagerService.loadFirstPage(this.id);
    }

    previousLessonsPage(){
        this.lessonsPagerService.previous();
    }   

    nextLessonsPage(){
        this.lessonsPagerService.next();
    }


    ngOnDestroy() {
        console.log('destroying CourseComponent ...');
    }

}








