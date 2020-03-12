import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryQueryComponent } from './secretary-query.component';

describe('SecretaryQueryComponent', () => {
  let component: SecretaryQueryComponent;
  let fixture: ComponentFixture<SecretaryQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaryQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
