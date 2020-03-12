import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './interfaces/student.model';
import { NewAddStudent } from './classes/new-add-student';
import { NewDegree } from './classes/new-degree';
import { NewPermission } from './classes/new-permission';
import { OldPermission } from './classes/old-permission';
import { RegisterResult } from './interfaces/register-result.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  querySecretary(username: string, id: string){
    return this._http.get<Student>('http://snf-7429.ok-kno.grnetcloud.net:3000/SecrRouter/Secretary/query?username='+ username + '&id=' + id);
  }//check

  queryStudent(username: string, id: string){
    return this._http.get<Student>('http://snf-7429.ok-kno.grnetcloud.net:3000/StudRouter/Student/showDegrees?username='+ username + '&id=' + id);
  }//check

  queryRecruiter(username: string, id: string, passcode: number){
    return this._http.get<Student>('http://snf-7429.ok-kno.grnetcloud.net:3000/RecrRouter/Recruiter?username=' + username + '&id=' + id + '&passcode=' + passcode);
  }//check

  registerNewStudent(username: string, id: string){
    return this._http.get<RegisterResult>('http://snf-7429.ok-kno.grnetcloud.net:3000/SecrRouter/Secretary/registerStudent?username=' + username + '&id=' + id)
  }//check

  addNewStudent(newStudent: NewAddStudent){
    return this._http.post<Student>('http://snf-7429.ok-kno.grnetcloud.net:3000/SecrRouter/Secretary/addStudent', newStudent);
  }//check

  addNewDegree(newDegree: NewDegree){
    return this._http.post<any>('http://snf-7429.ok-kno.grnetcloud.net:3000/SecrRouter/Secretary/addDegree', newDegree);
  }//check

  addNewPermission(newPermission: NewPermission){
    return this._http.post<any>('http://snf-7429.ok-kno.grnetcloud.net:3000/StudRouter/Student/addPermission', newPermission);
  }//check

  removeOldPermission(oldPermission: OldPermission){
    return this._http.post<any>('http://snf-7429.ok-kno.grnetcloud.net:3000/StudRouter/Student/removePermission', oldPermission);
  }//check
}
