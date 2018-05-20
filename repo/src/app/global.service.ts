import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GlobalService {

  private _baseUrl : string = "http://localhost:60061/api/";
  constructor(private _http : Http) { }

  PostMethod(credentials,url):Observable<any>{
    console.log(credentials);
    return this._http.post(this._baseUrl+url,credentials).map(this.extractData).catch(this.handleError);
  }

  GetMethod(url):Observable<any[]>{
    return this._http.get(this._baseUrl+url).map(this.extractData).catch(this.handleError);
  }
  
  PutMethod(data,url):Observable<any>{
    return this._http.put(this._baseUrl+url+"/"+data.id,data).map(this.extractData).catch(this.handleError);
  }
  
  extractData(res:Response){
    let response = res.json();
    let body = response;
    //console.log(body);
    return body || {};
  }

  handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    let errorResponse = error.json();
    if (errorResponse.StatusCode == 401) {
        location.reload();
    }
    return Observable.throw(errMsg);
  }
}
