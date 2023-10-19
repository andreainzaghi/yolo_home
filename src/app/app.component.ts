import { Component } from '@angular/core';
import { ProductService } from '../app/services/productservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data_card_first :ProductService[] = [];
}
