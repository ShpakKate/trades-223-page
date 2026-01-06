import { Component, Input } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-cards-full',
  imports: [
    CommonModule,
    NgTemplateOutlet,
    Icon,
  ],
  templateUrl: './cards-full.html',
  styleUrl: './cards-full.scss',
  standalone: true,
})
export class CardsFull {
  @Input() img: string = '';
}
