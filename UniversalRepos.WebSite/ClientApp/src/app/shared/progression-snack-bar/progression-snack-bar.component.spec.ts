import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionSnackBarComponent } from './progression-snack-bar.component';

describe('ProgressionSnackBarComponent', () => {
  let component: ProgressionSnackBarComponent;
  let fixture: ComponentFixture<ProgressionSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressionSnackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressionSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
