import { Component, Input } from '@angular/core';
import { IntroData } from '../../models/department.model';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-base-format',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './base-format.html',
  styleUrl: './base-format.scss',
  standalone: true,
})
export class BaseFormat {
  @Input() introData!: IntroData;
  @Input() introHeader: string = '';
  @Input() intro: string = '';
}
