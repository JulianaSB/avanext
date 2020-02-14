import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../shared/interfaces/transferencia.interfaces';
import { TransferService } from './transfer.service';
import { Router } from '@angular/router';
import { User } from './user.interface';
import { Transfer } from './transfer.interface';



@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  numeroConta;
  show = true;
  public maskCPF = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  dadosTransferencia: Transferencia;

  usuario: Transfer = {
   userName: null,
   agency: null,
   accountNumber: null,
   cpf: null,
   transferValue: null,
   transferType: null,
   description: null,
   banckCode: null,

  };
  // PRIMEIRA TELA
  onSubmit(form) {
    this.usuario.userName = form.value.userName;
    this.usuario.agency = form.value.agency;
    this.usuario.accountNumber = form.value.accountNumber;
    this.usuario.cpf = form.value.cpf;

    console.log(form.value);
    this.show = !this.show;
  }

  // SEGUNDA TELA
  onConfirm(form) {
    console.log(form);
    this.usuario.transferValue = form.value.transferValue;
    this.usuario.transferType = form.value.transferType;
    this.usuario.description = form.value.description;

    console.log(form.value);
    this.authService.setTransferencia(this.usuario);
    this.router.navigate(['confirm/']);
  }

  constructor(
    private authService: TransferService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // VALIDACAO DE CAMPOS
  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
    };
  }

  buscaDadosConta(conta){
    console.log(conta);
    this.authService.getDadosDaConta(conta)
      .subscribe(result => {
        console.log(result);
        this.usuario.agency = result.agency;
        this.usuario.userName = result.name;
        this.usuario.accountNumber = result.accountNumber;
        this.usuario.cpf = result.cpf;
        this.usuario.banckCode = result.banckCode;
      });
  }

  addThousandsSeparator(n, thousandsSeparatorSymbol) {
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol);
  }
}
