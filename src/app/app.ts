import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InlineSVGDirective, InlineSVGModule } from 'ng-inline-svg-2';
import { CommercialOffer } from './features/trades/pages/commercial-offer/commercial-offer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommercialOffer,
    CommonModule,
    InlineSVGModule,
    InlineSVGDirective,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {}
