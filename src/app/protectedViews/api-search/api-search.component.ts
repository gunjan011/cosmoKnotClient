import { Component } from '@angular/core';
import { ApiSearchService, base } from '../../services/api-search.service'

@Component({
  selector: 'app-api-search',
  templateUrl: './api-search.component.html',
  styleUrls: ['./api-search.component.css']
})
export class ApiSearchComponent {
  public endpoint : Endpoint = {
    baseURL : base,
    termURL : '',
    typeURL : ''
  }

  results : Results[]; 

  constructor(
    private apiSearchService : ApiSearchService
  ) { }

  submitSearch() : any {
    this.apiSearchService.geneLabSearch(this.endpoint.termURL, this.endpoint.typeURL)
      .subscribe(results => this.results = results)
  }

}
export interface Endpoint {
  baseURL : string;
  termURL : string;
  typeURL : string
}

export interface Results {
  results : any
}