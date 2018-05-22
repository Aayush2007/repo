import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiserviceService {

  constructor(
    private http: Http
  ) { }

  getCountry():Observable<any[]>{
    return this.http.get("http://localhost:49829/api/countries").map(this.extractData);
  }

  extractData(res:Response){
		let response = res.json();
		let body = response;
		return body || {};
  }
  
  
}
