import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Transactions } from '../../extract/extract.interface';
import { ExtractService } from '../extract.service';

@Component({
  selector: 'app-details-extract',
  templateUrl: './details-extract.component.html',
  styleUrls: ['./details-extract.component.scss']
})
export class DetailsExtractComponent implements OnInit {
  transation: Transactions;
  loading: boolean;
  constructor(
    private route: ActivatedRoute,
    private extratoService: ExtractService,
  ) { }

  ngOnInit() {
    const idTransacao = this.route.snapshot.paramMap.get('idTransacao');
    this.getTransferId(idTransacao);
  }

  getTransferId(idTransacao) {
    this.loading = true;
    this.extratoService.getTransferId(idTransacao)
      .pipe(
      )
      .subscribe(response => {
        this.transation = response;
        this.loading = false;
      });
  }
}
