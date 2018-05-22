import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserDetails } from '../models/details';

@Injectable()
export class ApiserviceService {

  constructor(
    private http: Http
  ) { }

  getCountry():Observable<any>{
    return this.http.get("http://localhost:62411/api/countries").map(this.extractData);
  }

  addUser(userInput: UserDetails):Observable<any>{
    return this.http.post("http://localhost:62411/Api/users",{
      "UserId": 1,
      "UserName": userInput.UserName,
      "Password": userInput.Password,
      "Role": userInput.Role,
      "FName": userInput.FName,
      "LName": userInput.LName,
      "Age": userInput.Age,
      "Country": userInput.Country
    }, { headers: new Headers({ 'Content-Type': 'application/json' }) });
  }

  deleteUser(userName:string):Observable<any>{
    return this.http.get("http://localhost:49829/api/deleteuser/"+ userName).map(this.extractData);
  }

  extractData(res:Response){
		let response = res.json();
		let body = response;
		return body || {};
  }
  
  
}
