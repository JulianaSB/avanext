import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HeaderComponent } from '../header/HeaderComponent';
import { Router } from '@angular/router';
import { Usuario } from '../shared/interface/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: any = {
   cpf: null,
   password: null,
  };

  show = true;

  cpf: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.cpf = this.auth.getCpf();
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
    }
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  onSubmit(form) {
    const pass = form.value.password;
    this.auth.login(this.cpf, pass).subscribe(
      response => {
        console.log('Usuário logado: ', response);
        this.auth.setUsuario(response);
        this.auth.setToken(response);
        this.router.navigate(['home-logada']);
      }, error => {
        console.log('Login incorreto. Mensagem: ', error);
    });
  }
}
