import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddPermissionComponent } from './student-add-permission.component';

describe('StudentAddPermissionComponent', () => {
  let component: StudentAddPermissionComponent;
  let fixture: ComponentFixture<StudentAddPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAddPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
