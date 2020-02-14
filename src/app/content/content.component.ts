import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const options = {
      stringsElement: '#typed-strings',
      strings: [
        'Avanext',
        'Seu próximo banco digital'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };
    const typed = new Typed('.typing-element', options);
  }

  goNewClient() {
    this.router.navigate(['cadastro']);
  }
}
