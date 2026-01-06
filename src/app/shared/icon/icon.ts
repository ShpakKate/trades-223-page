import { Component, Input } from '@angular/core';
import { InlineSVGDirective } from 'ng-inline-svg-2';

@Component({
  selector: 'app-icon',
  imports: [InlineSVGDirective],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  standalone: true,
})
export class Icon {
  @Input() path = '';
}
