import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { RegisterResult } from 'src/app/interfaces/register-result.model';

@Component({
  selector: 'app-secretary-register-student',
  templateUrl: './secretary-register-student.component.html',
  styleUrls: ['./secretary-register-student.component.css']
})
export class SecretaryRegisterStudentComponent implements OnInit {
  public username: string;
  public id: string;
  public result: RegisterResult;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  registerStudent(username: string, id: string){
    return this.dataService.registerNewStudent(username, id).subscribe(data => this.result = data);
  }

}
