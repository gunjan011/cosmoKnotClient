import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserDiagBoxComponent } from './create-user-diag-box.component';

describe('CreateUserDiagBoxComponent', () => {
  let component: CreateUserDiagBoxComponent;
  let fixture: ComponentFixture<CreateUserDiagBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserDiagBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserDiagBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
