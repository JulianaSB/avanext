import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario.interface';
import { environment } from 'src/environments/environment';
import { Status } from '../interface/status.interface';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  usuarioLogado: string;
  usuarioLogou: boolean;
  cpfLogado: string;
  API_URL = environment.API_URL;
  token: string;

  constructor( private http: HttpClient, private auth: AuthService) { }

  confirmCpf(cpf: string): Observable<HttpResponse<Status>> {
    return this.http.get<Status>(this.API_URL + 'users/cpf/' + cpf, {observe: 'response'});
  }

  setCpf(cpf: string) {
    this.cpfLogado = cpf;
  }

  getCpf() {
    return this.cpfLogado;
  }

  setToken(token) {
    this.token = token.token;
    localStorage.setItem('token', JSON.stringify(this.token));
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const tokenStorage = localStorage.getItem('token');
    return this.token;
  }

  login(user: string, pass: string) {
    const login = { cpf: user, password: pass };
    return this.http.post(this.API_URL + 'users/authenticate', login);
  }

  isLogged(): boolean {
    return this.getUsuario() ? true : false;
  }

  setUsuario(usuario) {
    if(usuario.data) {
      this.usuarioLogado = usuario.data;
    } else {
      this.usuarioLogado = usuario;
    }
    localStorage.setItem('usuario', JSON.stringify(this.usuarioLogado));
  }

  getUsuario() {
    if (this.usuarioLogado) {
      return this.usuarioLogado;
    }

    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      const parsedUsuarioGuardado = JSON.parse(usuarioGuardado);
      this.usuarioLogado = parsedUsuarioGuardado;
      return parsedUsuarioGuardado;
    }

    return null;
  }

  maskCpf(cpf: string): string {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  unMaskCpf(cpf: string): string {
    return cpf.replace(/\D+/g, '');
  }
}
