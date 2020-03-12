import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryAddDegreeComponent } from './secretary-add-degree.component';

describe('SecretaryAddDegreeComponent', () => {
  let component: SecretaryAddDegreeComponent;
  let fixture: ComponentFixture<SecretaryAddDegreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaryAddDegreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryAddDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
