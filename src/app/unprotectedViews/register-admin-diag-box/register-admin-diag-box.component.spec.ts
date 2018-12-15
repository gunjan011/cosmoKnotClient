import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdminDiagBoxComponent } from './register-admin-diag-box.component';

describe('RegisterAdminDiagBoxComponent', () => {
  let component: RegisterAdminDiagBoxComponent;
  let fixture: ComponentFixture<RegisterAdminDiagBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAdminDiagBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAdminDiagBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
