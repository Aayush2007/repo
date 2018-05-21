import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Injectable()
export class ApiserviceService {

  constructor(
    private http: Http
  ) { }

  getCountry = () => {
    return this.http.get('');
  }
}
