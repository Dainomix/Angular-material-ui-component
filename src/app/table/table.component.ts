import { Component, OnInit } from '@angular/core';

export interface Students{
  name: string;
  subject: string;
  rollNo: number;
  age: number;
}

const students_data: Students[] = [
  {name: "John", subject: "science", rollNo: 1, age: 20},
  {name: "Mark", subject: "Math", rollNo: 2, age: 23},
  {name: "Max", subject: "Chemistry", rollNo: 3, age: 22},
  {name: "John", subject: "Mechanical", rollNo: 4, age: 21},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  col_names: string[] = ['name','subject', 'rollNo', 'age'];
  table_data = students_data;

  constructor() { }

  ngOnInit(): void {
  }

}
