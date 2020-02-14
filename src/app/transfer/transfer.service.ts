import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transfer } from './transfer.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.interface';
import { AuthService } from '../shared/services/auth.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class TransferService {

  dadosTransferencia: Transfer;
  API_URL = environment.API_URL;

  constructor(
    private router: Router,
    private auth: AuthService,
    private http: HttpClient
  ) { }

  setTransferencia(transferencia: Transfer) {
    console.log(transferencia);
    localStorage.setItem('transferencia', JSON.stringify(transferencia));
    this.dadosTransferencia = transferencia;
  }


  getTransferencia() {
    if (this.dadosTransferencia) {
      return this.dadosTransferencia;
    }

    const transferenciaGuardado = localStorage.getItem('transferencia');
    if (transferenciaGuardado) {
      const parsedTransferenciaGuardado = JSON.parse(transferenciaGuardado);
      this.dadosTransferencia = parsedTransferenciaGuardado;
      return parsedTransferenciaGuardado;
    }

    return null;
  }


  // VALIDACAO APENAS CAMPO CONTA

  getDadosDaConta(page): Observable<User> {
    const headers = new HttpHeaders({
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDZmNDJlZTAxYWFjMmZjNDFmM2Y2MiIsImNwZiI6IjQ0MzUxMjQxODEwIiwibmFtZSI6IkVseHNhbGVtIiwiaWF0IjoxNTgxNzEyNTg1LCJleHAiOjE1ODE3OTg5ODV9.FW7u4OX4jZmZ3cBEpGD9fgH5XtPW_4rqjh5d9FO-k14'


    });
    console.log("teste", this.auth.getToken());
    

    return this.http.get<User>(this.API_URL + 'users/accountNumber/' + page, { headers });
  }

  // VALIDACAO TODOS OS CAMPOS

  criarTransferencia(dadosTransferencia: Transfer) {
    const headers = new HttpHeaders({
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDZmNDJlZTAxYWFjMmZjNDFmM2Y2MiIsImNwZiI6IjQ0MzUxMjQxODEwIiwibmFtZSI6IkVseHNhbGVtIiwiaWF0IjoxNTgxNzEwODAxLCJleHAiOjE1ODE3OTcyMDF9.4LAXIOGLKG8kxj3S14nUTxdadbmzrOL8UHJdBFhoOaI'
    });

    return this.http.post('https://avanext.herokuapp.com/transactions/transfer', dadosTransferencia, { headers });
  }
}
