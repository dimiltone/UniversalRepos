import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRepositoryDialogComponent } from './delete-repository-dialog.component';

describe('DeleteRepositoryDialogComponent', () => {
  let component: DeleteRepositoryDialogComponent;
  let fixture: ComponentFixture<DeleteRepositoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRepositoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRepositoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
