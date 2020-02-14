import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transactions } from './extract.interface';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExtractService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient, private auth: AuthService
  ) { }

  getExtract(page: number): Observable<Transactions[]> {
    const headers = new HttpHeaders({
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDZmNDJlZTAxYWFjMmZjNDFmM2Y2MiIsImNwZiI6IjQ0MzUxMjQxODEwIiwibmFtZSI6IkVseHNhbGVtIiwiaWF0IjoxNTgxNzEyNTg1LCJleHAiOjE1ODE3OTg5ODV9.FW7u4OX4jZmZ3cBEpGD9fgH5XtPW_4rqjh5d9FO-k14',
    });
    const usuario = this.auth.getUsuario();
    return this.http.get<Transactions[]>('https://avanext.herokuapp.com/transactions/bankStatement/5e46f42ee01aac2fc41f3f62&2020-2-14&2020-2-14', { headers });
  }
  getTransferId(idTransacao): Observable<Transactions> {
    const headers = new HttpHeaders({
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDZmNDJlZTAxYWFjMmZjNDFmM2Y2MiIsImNwZiI6IjQ0MzUxMjQxODEwIiwibmFtZSI6IkVseHNhbGVtIiwiaWF0IjoxNTgxNzEyNTg1LCJleHAiOjE1ODE3OTg5ODV9.FW7u4OX4jZmZ3cBEpGD9fgH5XtPW_4rqjh5d9FO-k14',
    });

    return this.http.get<Transactions>(this.API_URL + 'transactions/' + idTransacao, {
      params: {
      },
      headers
    });
  }
}
