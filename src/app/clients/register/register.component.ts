import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister;
  conversao: string;
  valoresForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: ['']
    });
  }

  newClient() {
    this.formRegister.valueChanges.subscribe(response => {
      this.valoresForm = response;
    });

    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('cadastro', this.conversao);
  }

}
