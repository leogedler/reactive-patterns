import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  
  private errorSubject = new BehaviorSubject<string[]>([]);

  errors$: Observable<string[]> = this.errorSubject.asObservable();


  constructor() { }

  error(...errors: string[]){
    this.errorSubject.next(errors);
  }

}
