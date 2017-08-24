import { Course } from './../shared/model/course';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[];

  constructor() { }

  ngOnInit() {
  }

}
