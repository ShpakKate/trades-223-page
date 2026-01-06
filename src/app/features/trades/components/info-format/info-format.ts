import { Component } from '@angular/core';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { SocialData } from '../../models/department.model';
import { Button } from '../../../../shared/button/button';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-info-format',
  imports: [
    NgForOf,
    NgIf,
    NgTemplateOutlet,
    Button,
    Icon
  ],
  templateUrl: './info-format.html',
  styleUrl: './info-format.scss',
  standalone: true,
})
export class InfoFormat {
  public socialData: SocialData[] = [
    {
      title: 'Экосистема ONY',
      list: [
        'ONY Signal',
        'ONY Magma',
      ]
    },
    {
      title: 'Навигация',
      list: [
        'Проекты',
        'Об агентстве',
      ]
    },
    {
      title: 'Контакты',
      list: [
        '+7 495 120 78 88',
        'mail@ony.ru',
      ]
    },
    {
      title: 'Скачать презентацию',
      icon: 'downloadIcon',
    },
    {
      title: 'Соцсети',
      list: [
        'Telegram',
        'Youtube',
        'VK',
        'VC',
        'Behance',
        'Dribbble',
      ]
    },
    {
      title: 'Карьера',
      list: [
        'job@ony.ru',
        'Вакансии',
      ]
    },
  ];
}
