import { Component, OnInit } from '@angular/core';
import {Problem} from 'app/data-structure/problem';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  constructor() { }

  ngOnInit() {
  }

}
