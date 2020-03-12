import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Student } from 'src/app/interfaces/student.model';

@Component({
  selector: 'app-student-query',
  templateUrl: './student-query.component.html',
  styleUrls: ['./student-query.component.css']
})
export class StudentQueryComponent implements OnInit {
    id: string;
    username: string;
    student: Student;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  getStudent(username: string, id: string){
    return this.dataService.queryStudent(username,id).subscribe(data => this.student = data);
  }
}
