import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepositoryDialogComponent } from './create-repository-dialog.component';

describe('CreateRepositoryDialogComponent', () => {
  let component: CreateRepositoryDialogComponent;
  let fixture: ComponentFixture<CreateRepositoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRepositoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRepositoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
