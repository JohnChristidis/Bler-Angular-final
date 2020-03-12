import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-secretary-query',
  templateUrl: './secretary-query.component.html',
  styleUrls: ['./secretary-query.component.css']
})
export class SecretaryQueryComponent implements OnInit {
  id: string;
  username: string;
  student: Student;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  getStudent(username: string, id: string){
    return this.dataService.querySecretary(username,id).subscribe(data => this.student = data);
  }
}
