import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  // confirm: confirm

  Transferencia: any = {
    userName: null,
    agency: null,
    accountNumber: null,
    cpf: null,
    transferValue: null,
    transferType: null,
    description: null
   };

  constructor(
    private authService: TransferService,
  ) {}

  ngOnInit() {
    this.Transferencia = this.authService.getTransferencia();
    console.log();
  }

  // Importar o service tranfer
  // Criar uma funcao
  // referenciar no clique do botao
  // passa transfer p servico



  
  onConfirmTransation() {
    this.authService.criarTransferencia(this.Transferencia);
  }
}

