import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { NewDegree } from 'src/app/classes/new-degree';

@Component({
  selector: 'app-secretary-add-degree',
  templateUrl: './secretary-add-degree.component.html',
  styleUrls: ['./secretary-add-degree.component.css']
})
export class SecretaryAddDegreeComponent implements OnInit {
  newDegreeModel = new NewDegree("","","","","","","","");

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addDegree(){
      this.dataService.addNewDegree(this.newDegreeModel)
        .subscribe(
          data => console.log('Succsess', data),
          error => console.log('Error', error)
        )
    }
    
}
