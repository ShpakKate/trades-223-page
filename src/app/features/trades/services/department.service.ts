// src/app/services/commercial.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { CommercialOffer, Data, Expertise, PaymentFormat, Stage, Total } from '../models/department.model';


@Injectable({
  providedIn: 'root'
})
export class CommercialService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  // Коммерческое предложение
  getCommercialOffer(): Observable<CommercialOffer> {
    return this.http.get<CommercialOffer>(`${this.apiUrl}/commercialOffer`);
  }

  // Этапы
  getData(): Observable<Data> {
    return this.http.get<Data>(`${this.apiUrl}/data`);
  }

  // Итоги
  getTotal(): Observable<Total> {
    return this.http.get<Total>(`${this.apiUrl}/totals`);
  }

  // Формат оплаты
  getPaymentFormat(): Observable<PaymentFormat> {
    return this.http.get<PaymentFormat>(`${this.apiUrl}/paymentFormat`);
  }

  // Экспертиза
  getExpertise(): Observable<Expertise> {
    return this.http.get<Expertise>(`${this.apiUrl}/expertise`);
  }

  // Обновить данные
  updateStages(stages: Stage[]): Observable<Stage[]> {
    return this.http.put<Stage[]>(`${this.apiUrl}/stages`, stages);
  }

  // Рассчитать общую стоимость
  // calculateTotalCost(): Observable<number> {
  //   return this.getStages().pipe(
  //     map(stages => stages.reduce((sum, stage) => sum + stage.costNumeric, 0))
  //
  //   );
  // }
}
