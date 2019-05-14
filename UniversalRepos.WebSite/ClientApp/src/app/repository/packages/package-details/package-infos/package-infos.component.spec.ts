import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageInfosComponent } from './package-infos.component';

describe('PackageInfosComponent', () => {
  let component: PackageInfosComponent;
  let fixture: ComponentFixture<PackageInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
