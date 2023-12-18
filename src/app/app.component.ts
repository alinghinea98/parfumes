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
      name: 'Dior Elixir',
      path: '../../../assets/parfumes/dior-elixir.jpeg',
      urlPage:
        'https://www.notino.ro/dior/sauvage-elixir-extract-de-parfum-pentru-barbati/p-16085999/?gad_source=1&gclid=EAIaIQobChMI_aWE9KyZgwMV7KaDBx3DsAQuEAQYAiABEgLc2_D_BwE',
    },
    {
      name: 'Invictus Onyx',
      path: '../../../assets/parfumes/invictus-onyx.jpeg',
      urlPage:
        'https://www.simplestore.ro/index.php?route=product/product&product_id=20295&gad_source=1&gclid=EAIaIQobChMIwILchq2ZgwMVb5aDBx2AXwAzEAQYAyABEgIEPfD_BwE',
    },
    {
      name: 'Dolce Gabbana - The One',
      path: '../../../assets/parfumes/the-one-dolce-gabanna.jpeg',
      urlPage:
        'https://www.sephora.ro/p/the-one-for-men---eau-de-parfum-332228.html?gad_source=1&gclid=EAIaIQobChMIqeqSqq2ZgwMVFMTVCh38swGJEAQYASABEgKlWPD_BwE&gclsrc=aw.ds',
    },
    {
      name: 'Phantom Legion',
      path: '../../../assets/parfumes/phantom-legion.jpeg',
      urlPage:
        'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjmtoXGrZmDAxXEGQYAHewGAQ0YABAOGgJ3cw&ase=2&gclid=EAIaIQobChMI5raFxq2ZgwMVxBkGAB3sBgENEAQYASABEgKmPfD_BwE&ohost=www.google.com&cid=CAASJeRoHYcyABNJ-B2B5ZJLDZ36cc_QqLPajYrD7Haff9LRR9sZTPg&sig=AOD64_1JBHehC7j9r9f0qK0Kos9LtSNdyA&ctype=5&q=&nis=4&ved=2ahUKEwiWpP3FrZmDAxXC3AIHHePmBaAQ9aACKAB6BAgEEBA&adurl=',
    },
  ];
}

export type ParfumeModel = {
  name?: string;
  path?: string;
  urlPage?: string;
};
