import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf, UpperCasePipe } from '@angular/common';
import { async, finalize, Observable, takeUntil } from 'rxjs';
import { DestroyService } from '../../services/destroy.service';
import { CommercialService } from '../../services/department.service';
import { CommercialOffer } from '../../models/department.model';

@Component({
  selector: 'app-header',
  imports: [
    NgForOf,
    UpperCasePipe,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
  providers: [DestroyService],
})
export class Header implements OnInit {
  public logo = 'ony';
  public linkText = 'Docs';
  public header = 'Коммерческое предложение для ЭТП «Торг 223»';
  // private commercialOffer: CommercialOffer;
  public commercialOffer$!: Observable<CommercialOffer>;

  private isLoading: boolean = false;

  constructor(
    private commercialService: CommercialService,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.commercialOffer$ = this.commercialService.getCommercialOffer();

    // this.commercialService.getCommercialOffer()
    //   .pipe(
    //     takeUntil(this.destroyed),
    //     finalize(() => this.isLoading = false),
    //   )
    //   .subscribe({
    //     next: (data) => {
    //       this.commercialOffer = data;
    //     }
    //   });
  }
}
