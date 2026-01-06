import { Component, Input } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgIf,
    NgTemplateOutlet,
    NgClass
  ],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  standalone: true,
})
export class Button {
  @Input() width = 200;
  @Input() height = 38;
  @Input() isIcon = true;
}
