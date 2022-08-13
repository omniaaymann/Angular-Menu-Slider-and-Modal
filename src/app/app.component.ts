import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Menu_Slider_and_Modal';
  navIsToggled;
  modalIsShown = false;

  showMenu(navToggled) {
    console.log(navToggled);
    this.navIsToggled = navToggled;
  }

  showModal(modalOpened) {
    this.modalIsShown = modalOpened;
  }

}
