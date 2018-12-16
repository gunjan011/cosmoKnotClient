import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoint, Results } from '../protectedViews/api-search/api-search.component'
import { environment2 } from '../../environments/environment';

export const base = 'https://genelab-data.ndc.nasa.gov/genelab/data/search'
@Injectable({
  providedIn: 'root'
})
export class ApiSearchService {
  private nasa_api_key2 : string = environment2.nasa_api_key2;
  endpoint : Endpoint;

  constructor(
    private http : HttpClient
  ) { }

  geneLabSearch(term, type) : Observable<Results[]>{
    return this.http.get<Results[]>(`${base}?=term=${term}&from=0&type=${type}&api_key=${this.nasa_api_key2}`)
  }
}
