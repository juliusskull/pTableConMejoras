import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

constructor(public _http: HttpClient) {}
getValores(){
  return this._http.get('assets/files/valores.json')
  .pipe( map ((res: any) => res
    ));

}

}
