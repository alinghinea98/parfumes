import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Parfumes';
  parfumesList: ParfumeModel[] = [
    {
      name: 'Dior',
      path: 'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw31196594/Y0785220/Y0785220_F078524009_E01_GHC.jpg?sw=800',
      urlPage:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dior.com%2Fen_us%2Fbeauty%2Fproducts%2Fsauvage-eau-de-parfum-Y0785220.html&psig=AOvVaw1xoRth_0leqvBVG-rHPsT0&ust=1702405266333000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCICA4vT_h4MDFQAAAAAdAAAAABAE',
    },
    {
      name: 'Carolina Herera',
      path: 'https://www.koku.ro/buxus/images/products/714686_carolina-herrera-good-girl-edp_14383475.jpg',
      urlPage:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.koku.ro%2Fapa-de-parfum-carolina-herrera-good-girl&psig=AOvVaw3XEECbep9BRMxYhyTbLHPX&ust=1702405323730000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOjcxZCAiIMDFQAAAAAdAAAAABAE',
    },
  ];
}

export type ParfumeModel = {
  name?: string;
  path?: string;
  urlPage?: string;
};
