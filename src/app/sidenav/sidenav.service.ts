import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Balance } from './sidenav-interface';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getBalance(): Observable<Balance> {
    const headers = new HttpHeaders({
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDZmNDJlZTAxYWFjMmZjNDFmM2Y2MiIsImNwZiI6IjQ0MzUxMjQxODEwIiwibmFtZSI6IkVseHNhbGVtIiwiaWF0IjoxNTgxNzEyNTg1LCJleHAiOjE1ODE3OTg5ODV9.FW7u4OX4jZmZ3cBEpGD9fgH5XtPW_4rqjh5d9FO-k14',
    });
    const usuario = this.auth.getUsuario();
    return this.http.get<Balance>(this.API_URL + 'users/5e46f42ee01aac2fc41f3f62', {
      params: {
      },
      headers
    });
  }
}
