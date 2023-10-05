/*
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  //---------------REGISTRO------------

  //Post para registrar un usuario
  postRegister(user: JSON): Observable<any> {
    let header = new HttpHeaders().set('Type-contet', 'aplication/json');
    return this.http.post<JSON[]>(
      'http://localhost:5001/Authentication/register',
      user,
      { headers: header, observe: 'response' }
    );
  }
*/
