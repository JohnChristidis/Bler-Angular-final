import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryAddStudentComponent } from './secretary-add-student.component';

describe('SecretaryAddStudentComponent', () => {
  let component: SecretaryAddStudentComponent;
  let fixture: ComponentFixture<SecretaryAddStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaryAddStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
