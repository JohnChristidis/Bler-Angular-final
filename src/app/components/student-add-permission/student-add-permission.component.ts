import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { NewPermission } from 'src/app/classes/new-permission';

@Component({
  selector: 'app-student-add-permission',
  templateUrl: './student-add-permission.component.html',
  styleUrls: ['./student-add-permission.component.css']
})
export class StudentAddPermissionComponent implements OnInit {
  newPermissionModel = new NewPermission("","","","","");
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  addPermission(){
    this.dataService.addNewPermission(this.newPermissionModel)
      .subscribe(
        data => console.log('Succsess', data),
        error => console.log('Error', error)
      )

  }
}
