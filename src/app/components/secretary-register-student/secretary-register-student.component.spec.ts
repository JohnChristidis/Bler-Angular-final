import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryRegisterStudentComponent } from './secretary-register-student.component';

describe('SecretaryRegisterStudentComponent', () => {
  let component: SecretaryRegisterStudentComponent;
  let fixture: ComponentFixture<SecretaryRegisterStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaryRegisterStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryRegisterStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
