import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDiagBoxComponent } from './login-diag-box.component';

describe('LoginDiagBoxComponent', () => {
  let component: LoginDiagBoxComponent;
  let fixture: ComponentFixture<LoginDiagBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDiagBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDiagBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
