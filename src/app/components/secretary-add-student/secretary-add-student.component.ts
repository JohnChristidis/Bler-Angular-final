import { Component, OnInit } from '@angular/core';
import { NewAddStudent } from 'src/app/classes/new-add-student';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-secretary-add-student',
  templateUrl: './secretary-add-student.component.html',
  styleUrls: ['./secretary-add-student.component.css']
})
export class SecretaryAddStudentComponent implements OnInit {
newStudentModel = new NewAddStudent("","","","");
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  addStudent(){
    this.dataService.addNewStudent(this.newStudentModel)
      .subscribe(
        data => console.log('Succsess', data),
        error => console.log('Error', error)
      )

  }
}
