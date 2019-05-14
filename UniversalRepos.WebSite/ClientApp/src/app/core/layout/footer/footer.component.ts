import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  applicatioName = environment.applicationName;
  version = environment.version;
  environment = environment.environment;
  constructor() { }

  ngOnInit() {
  }

}
