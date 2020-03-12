import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Student } from 'src/app/interfaces/student.model';

@Component({
  selector: 'app-recruiter-query',
  templateUrl: './recruiter-query.component.html',
  styleUrls: ['./recruiter-query.component.css']
})
export class RecruiterQueryComponent implements OnInit {
  id: string;
  username: string;
  passcode: number;
  student: Student;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  getStudent(username: string, id: string, passcode: number){
    return this.dataService.queryRecruiter(username,id,passcode).subscribe(data => this.student = data);
  }
}
