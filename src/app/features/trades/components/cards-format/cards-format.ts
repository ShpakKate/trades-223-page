import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cards-format',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './cards-format.html',
  styleUrl: './cards-format.scss',
  standalone: true,
})
export class CardsFormat {
  @Input() mtsImg: string = '';
  @Input() mtsPadding: number = 0;
  @Input() kasperskyImg: string = '';
  @Input() mtsText: string = 'Ребрендинг и бренд-платформа экосистемы цифровых сервисов';
  @Input() kasperskyText: string = 'Ребрендинг и бренд-платформа экосистемы цифровых сервисов';
}
