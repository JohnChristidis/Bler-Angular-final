import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterQueryComponent } from './recruiter-query.component';

describe('RecruiterQueryComponent', () => {
  let component: RecruiterQueryComponent;
  let fixture: ComponentFixture<RecruiterQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
