import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NugetPackageVersionDetailsComponent } from './nuget-package-version-details.component';

describe('NugetPackageVersionDetailsComponent', () => {
  let component: NugetPackageVersionDetailsComponent;
  let fixture: ComponentFixture<NugetPackageVersionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NugetPackageVersionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NugetPackageVersionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
