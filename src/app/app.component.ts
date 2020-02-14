import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'avanext';
  isLogged = this.auth.isLogged();
  constructor(private router: Router, private auth: AuthService ) { }
}
