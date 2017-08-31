import { MessagesService } from './../services/messages.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  errors$: Observable<string[]> = Observable.of([]);

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$
  }

  close(){
    this.messagesService.error()
  }

}
