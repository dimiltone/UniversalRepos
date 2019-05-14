import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryTypesComponent } from './repository-types.component';

describe('RepositoryTypesComponent', () => {
  let component: RepositoryTypesComponent;
  let fixture: ComponentFixture<RepositoryTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
