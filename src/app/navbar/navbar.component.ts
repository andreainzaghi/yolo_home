import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  toggleMenu() {
    // Implementa qui la logica per aprire/chiudere il menu hamburger
    console.log('Menu toggled');
  }
}
