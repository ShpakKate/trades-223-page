import { Component } from '@angular/core';
import { UserData } from '../../models/department.model';
import { NgForOf, NgTemplateOutlet } from '@angular/common';
import { Button } from '../../../../shared/button/button';

@Component({
  selector: 'app-questions-format',
  imports: [
    NgForOf,
    NgTemplateOutlet,
    Button
  ],
  templateUrl: './questions-format.html',
  styleUrl: './questions-format.scss',
  standalone: true,
})
export class QuestionsFormat {
  public userData: UserData[] = [
    {
      theme: 'Для старта проекта и деталей',
      user: 'Юлия Генова',
      role: 'New Business manager',
      image: '/assets/img/person-1.png',
    },
    {
      theme: 'Для нестандартных вопросов',
      user: 'Ольга Копырнова',
      role: 'Chief Commercial  and Client Director',
      image: '/assets/img/person-2.png',
    },
  ]

}
