import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {

  }
  init() {
    this.matIconRegistry.addSvgIcon(
      `database`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/database.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `Nuget`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/nuget.svg')
    );
  }
}
