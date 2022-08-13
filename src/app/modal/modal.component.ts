import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  constructor() { }
  @Output() modalClosed = new EventEmitter();
  @Input() modalIsShown;

  ngOnInit(): void {
  }

  closeModal() {
    this.modalIsShown = !this.modalIsShown;
  }


}
