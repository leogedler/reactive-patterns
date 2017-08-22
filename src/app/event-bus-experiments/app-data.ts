import { Lesson } from './../shared/model/lesson';
import * as _ from 'lodash';
import {Observer, Observable, BehaviorSubject} from 'rxjs'



class DataStore {
    private lessons: Lesson[] = [];

    private lessonListSubject = new BehaviorSubject([]);

    public lessonList$: Observable<Lesson[]> = this.lessonListSubject.asObservable();

    initializeLessonList(newList: Lesson[]){
        this.lessons = _.cloneDeep(newList);
        this.broadcast();
    }

    addLesson(newLesson:Lesson){
        this.lessons.push(_.cloneDeep(newLesson));
        this.broadcast();
    }

    delete(deleted: Lesson){
        _.remove(this.lessons, lesson => lesson.id === deleted.id);
        this.broadcast();
    }

    toggleLessonViewed(toggled:Lesson) {
        const lesson = _.find(this.lessons, lesson => lesson.id === toggled.id);
        lesson.completed = !lesson.completed;
        this.broadcast();
      }

    broadcast(){
        this.lessonListSubject.next(_.cloneDeep(this.lessons));
    }
}

export const store = new DataStore();