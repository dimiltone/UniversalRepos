import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public repositoryTypes: RepositoryType[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<RepositoryType[]>(baseUrl + 'api/RepositoryType').subscribe(result => {
      this.repositoryTypes = result;
    }, error => console.error(error));
  }
}

interface RepositoryType {
  name: string;
  description: string;
}
