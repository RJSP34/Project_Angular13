import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeClass } from './employee-class.model';

@Injectable({
  providedIn: 'root'
})
export class MuserviceService {

  private url = 'http://localhost:8080';
  constructor(private http:HttpClient) {


  }

  getQuery(Query:string){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(Query);
this.http.post<EmployeeClass>(this.url,body,{'headers':headers});

  }
}
