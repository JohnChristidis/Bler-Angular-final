import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { OldPermission } from 'src/app/classes/old-permission';

@Component({
  selector: 'app-student-remove-permission',
  templateUrl: './student-remove-permission.component.html',
  styleUrls: ['./student-remove-permission.component.css']
})
export class StudentRemovePermissionComponent implements OnInit {

  constructor(private dataService: DataService) { }
  oldPermissionModel = new OldPermission("","","");

  ngOnInit(): void {
  }
  removePermission(){
    this.dataService.removeOldPermission(this.oldPermissionModel)
      .subscribe(
        data => console.log('Succsess', data),
        error => console.log('Error', error)
      )

  }
}
