import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  // Esempio di dati provenienti da un JSON
  data = {
    leftSection: {
      imageSrc: '../../assets/img/hero_home.png',
      paragraphs: [
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur vel sint dolorum perferendis quis sit modi dolor reprehenderit voluptas totam debitis illum ullam molestiae tempore voluptates, molestias ea nobis!',
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequatur vel sint dolorum perferendis quis sit modi dolor reprehenderit voluptas totam debitis illum ullam molestiae tempore voluptates, molestias ea nobis!'
      ]
    },
    rightSection: {
      imageSrc: '../../assets/img/home.svg',
      title: 'Quanto mi costa?',
      details: [
        '80mq',
        'Torino, Italia',
        "Prima casa di priorità"
      ],
      price: '14,00$ * al mese'
    }
  };
}
