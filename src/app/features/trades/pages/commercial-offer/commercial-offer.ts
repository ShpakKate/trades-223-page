import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { StagesTable } from '../../components/stages-table/stages-table';
import { BaseFormat } from '../../components/base-format/base-format';
import { IntroData } from '../../models/department.model';
import { CardsFormat } from '../../components/cards-format/cards-format';
import { CardsFull } from '../../components/cards-full/cards-full';
import { QuestionsFormat } from '../../components/questions-format/questions-format';
import { InfoFormat } from '../../components/info-format/info-format';

@Component({
  selector: 'app-commercial-offer',
  imports: [
    Header,
    StagesTable,
    BaseFormat,
    CardsFormat,
    CardsFull,
    QuestionsFormat,
    InfoFormat
  ],
  templateUrl: './commercial-offer.html',
  styleUrl: './commercial-offer.scss',
  standalone: true,
})
export class CommercialOffer {
  public introData: IntroData = {
    introHeader: 'Формат и оплата',
    intro: [
      {
        title: 'Fix',
        value: 'Подходит для простых проектов с четким ТЗ. Мы заранее понимаем объём работ и можем чётко оценить сроки и стоимость',
      },
      {
        title: '100% предоплата',
        value: 'Актуальна для текущих рассчетов всех стоимостей во всех этапах',
      },
    ]
  }

}
