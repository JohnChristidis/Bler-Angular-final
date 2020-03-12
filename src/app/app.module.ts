import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecruiterQueryComponent } from './components/recruiter-query/recruiter-query.component';
import { SecretaryQueryComponent } from './components/secretary-query/secretary-query.component';
import { StudentQueryComponent } from './components/student-query/student-query.component';
import { StudentAddPermissionComponent } from './components/student-add-permission/student-add-permission.component';
import { StudentRemovePermissionComponent } from './components/student-remove-permission/student-remove-permission.component';
import { SecretaryRegisterStudentComponent } from './components/secretary-register-student/secretary-register-student.component';
import { SecretaryAddStudentComponent } from './components/secretary-add-student/secretary-add-student.component';
import { SecretaryAddDegreeComponent } from './components/secretary-add-degree/secretary-add-degree.component';

@NgModule({
  declarations: [
    AppComponent,
    RecruiterQueryComponent,
    SecretaryQueryComponent,
    StudentQueryComponent,
    StudentAddPermissionComponent,
    StudentRemovePermissionComponent,
    SecretaryRegisterStudentComponent,
    SecretaryAddStudentComponent,
    SecretaryAddDegreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
