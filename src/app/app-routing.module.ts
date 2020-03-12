import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentQueryComponent } from './components/student-query/student-query.component';
import { SecretaryQueryComponent } from './components/secretary-query/secretary-query.component';
import { RecruiterQueryComponent } from './components/recruiter-query/recruiter-query.component';
import { SecretaryRegisterStudentComponent } from './components/secretary-register-student/secretary-register-student.component';
import { SecretaryAddStudentComponent } from './components/secretary-add-student/secretary-add-student.component';
import { SecretaryAddDegreeComponent } from './components/secretary-add-degree/secretary-add-degree.component';
import { StudentAddPermissionComponent } from './components/student-add-permission/student-add-permission.component';
import { StudentRemovePermissionComponent } from './components/student-remove-permission/student-remove-permission.component';


const routes: Routes = [
  {path: 'student-query', component: StudentQueryComponent },
  {path: 'secretary-query', component: SecretaryQueryComponent },
  {path: 'recruiter-query', component: RecruiterQueryComponent},
  {path: 'secretary-register-student', component: SecretaryRegisterStudentComponent },
  {path: 'secretary-add-student', component: SecretaryAddStudentComponent },
  {path: 'secretary-add-degree', component: SecretaryAddDegreeComponent },
  {path: 'student-add-permission', component: StudentAddPermissionComponent },
  {path: 'student-remove-permission', component: StudentRemovePermissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
