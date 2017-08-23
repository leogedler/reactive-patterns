import { Lesson } from './../shared/model/lesson';
import * as _ from 'lodash';
import {Observer, Observable, BehaviorSubject} from 'rxjs'



class DataStore {

    private lessonListSubject = new BehaviorSubject([]);

    public lessonList$: Observable<Lesson[]> = this.lessonListSubject.asObservable();

    initializeLessonList(newList: Lesson[]){
        this.lessonListSubject.next( _.cloneDeep(newList));
    }

    addLesson(newLesson:Lesson){
        const lessons = this.cloneLessons();
        lessons.push(_.cloneDeep(newLesson));
        this.lessonListSubject.next(lessons);
    }

    delete(deleted: Lesson){
        const lessons = this.cloneLessons();

        _.remove(lessons, lesson => lesson.id === deleted.id);
        this.lessonListSubject.next(lessons);
    }

    toggleLessonViewed(toggled:Lesson) {
        const lessons = this.cloneLessons();

        const lesson = _.find(lessons, lesson => lesson.id === toggled.id);
        lesson.completed = !lesson.completed;
        this.lessonListSubject.next(lessons);
      }

    private cloneLessons(){
        return _.cloneDeep(this.lessonListSubject.getValue());
    }
}

export const store = new DataStore();