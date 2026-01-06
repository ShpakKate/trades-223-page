import { Component, Input, OnInit } from '@angular/core';
import { Data, Stage, Total } from '../../models/department.model';
import { AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { CommercialService } from '../../services/department.service';
import { Observable } from 'rxjs';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-stages-table',
    imports: [
        NgIf,
        NgForOf,
        NgTemplateOutlet,
        AsyncPipe,
        UpperCasePipe,
        Icon
    ],
  templateUrl: './stages-table.html',
  styleUrl: './stages-table.scss',
  standalone: true,
})
export class StagesTable implements OnInit {
  public data$!: Observable<Data>;
  private isLoading: boolean = false;

  constructor(
    private commercialService: CommercialService,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.data$ = this.commercialService.getData();
  }}
