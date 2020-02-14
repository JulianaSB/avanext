import { Component, OnInit } from '@angular/core';
import { Transactions } from './extract.interface';
import { ExtractService } from './extract.service';
import { Router } from '@angular/router';
import { delay, finalize, take } from 'rxjs/operators';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  extract: Array<Transactions>;
  loading: boolean;
  page = 1;

  constructor(
    private extractService: ExtractService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadExtract();
  }

  loadExtract() {
    this.loading = true;
    this.extractService.getExtract(this.page)
      .pipe(
        delay(1000),
        take(1),
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe(response => {
        this.extract = response;
      });
  }

  onDetails(idTransacao: string) {
    this.router.navigate(['extract/details/', idTransacao]);
  }

  onNextPage() {
    this.page++;
    this.loadExtract();
  }

  backPage() {
    this.page--;
    this.loadExtract();
  }


}
