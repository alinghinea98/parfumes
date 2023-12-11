import { Component, Input } from '@angular/core';
import { ParfumeModel } from '../../app.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item?: ParfumeModel;
}
