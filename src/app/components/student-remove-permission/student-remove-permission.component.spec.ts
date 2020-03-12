import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRemovePermissionComponent } from './student-remove-permission.component';

describe('StudentRemovePermissionComponent', () => {
  let component: StudentRemovePermissionComponent;
  let fixture: ComponentFixture<StudentRemovePermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRemovePermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRemovePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
