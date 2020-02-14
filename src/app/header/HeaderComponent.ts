import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HeaderInterface } from './header-interface';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
    balance: HeaderInterface;
    @Input() cpf = '';
    @Output() cpfChange = new EventEmitter();
    public mask = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

    cpfValid = this.auth.isLogged();
    date = new Date();
    estaCarregando: boolean;

    constructor(
        private auth: AuthService,
        private router: Router,
        private balanceService: HeaderService,
    ) { }

    ngOnInit() {
        if (this.auth.isLogged()) {
            this.getBalanceBank();
        }
    }

    getBalanceBank() {
        this.balanceService.getBalance().subscribe(response => {
          this.balance = response;
        });
    }

    isLogged() {
        return this.auth.isLogged();
    }

    validaCpf(evento) {
        this.cpf = evento.target.value;
        this.cpfChange.emit(evento.target.value);
    }

    confirmCpf(form: FormGroup) {
        console.log('Verifica CPF');
        this.cpf = this.auth.unMaskCpf(this.cpf);

        this.auth.confirmCpf(this.cpf).subscribe(response => {
            if (response.status === 200) {
                if (response.body.active) {
                    this.cpfValid = true;
                    this.auth.setCpf(this.cpf);
                    this.cpf = this.auth.maskCpf(this.cpf);
                    this.router.navigate(['login']);
                    console.log(response.body.message);
                } else {
                    console.log('CPF esta inativo');
                }
            }
        }, error => {
            if (error.status === 404) {
                this.cpfValid = false;
                this.cpf = this.auth.maskCpf(this.cpf);
                console.log(error.message);
            } else if (error.status === 500) {
                this.cpfValid = false;
                console.log(error.message);
            } else {
                console.log(error);
            }
        });
    }

    showError(nomeCotrole: string, form: FormGroup) {
        if (!form.controls[nomeCotrole]) {
            return false;
        }

        return form.controls[nomeCotrole].invalid && form.controls[nomeCotrole].touched;
    }
}
