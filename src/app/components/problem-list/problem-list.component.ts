import { Component, OnInit } from '@angular/core';
import {Problem} from 'app/data-structure/problem';

const PROBLEM: Problem[] = [
  {
    id: 1,
    name: "2sum",
    desc: "this is desc",
    difficulty: "super"
  },
    {
    id: 2,
    name: "2sum",
    desc: "this is desc",
    difficulty: "super"
  },
    {
    id: 4,
    name: "2sum",
    desc: "this is desc",
    difficulty: "super"
  },
    {
    id: 5,
    name: "2sum",
    desc: "this is desc",
    difficulty: "super"
  },
]


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  constructor() { }

  ngOnInit() {
    this.getProblems();
  }
  
  getProblems(): void{
    this.problems = PROBLEM;
  }
}
