import { Http, Headers } from '@angular/http';
import { User } from './../shared/model/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export const UNKNOWN_USER: User ={
  firstName: 'Unknown'
}

@Injectable()
export class UserService {

  user$ : Observable<User> = Observable.of(UNKNOWN_USER);

  constructor(private http: Http) { }

  login(email:string, password:string){
    const headers = new Headers;
    headers.set('Content-Type', 'application/json');
    this.http.post('/api/login', {email, password}, {headers})
    .subscribe(
      user => {

      },
      ()=> alert('Login Failed')
    )
  }

}
