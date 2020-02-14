import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Balance } from './sidenav-interface';
import { SidenavService } from './sidenav.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  balance: Balance;
  options: FormGroup;

  constructor(
    fb: FormBuilder,
    private balanceService: SidenavService,
    private auth: AuthService
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

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
}
