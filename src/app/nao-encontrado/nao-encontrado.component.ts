import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nao-encontrado',
  templateUrl: './nao-encontrado.component.html',
  styleUrls: ['./nao-encontrado.component.scss']
})
export class NaoEncontradoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(
    private router: Router
  ) { }

  onBotaoHomeClick() {
    console.log('Direcionar para Home');
    this.router.navigate(['login']);
  }

}
