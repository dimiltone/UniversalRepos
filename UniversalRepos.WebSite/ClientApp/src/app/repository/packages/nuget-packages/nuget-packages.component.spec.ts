import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NugetPackagesComponent } from './nuget-packages.component';

describe('NugetPackagesComponent', () => {
  let component: NugetPackagesComponent;
  let fixture: ComponentFixture<NugetPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NugetPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NugetPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
