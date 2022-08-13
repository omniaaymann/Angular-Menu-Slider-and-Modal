import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isNavToggled = true;
  isModalOpened = false;
  @Output() toggleNav = new EventEmitter();
  @Output() openModal = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onToggleNav(event) {
    this.toggleNav.emit(this.isNavToggled);
    this.isNavToggled = !this.isNavToggled;
  }

  onOpeningModal() {
    this.openModal.emit(!this.isModalOpened);
    
  }

}
