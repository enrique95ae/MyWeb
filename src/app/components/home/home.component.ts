import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


  popoverVisible: { [key: number]: boolean } = {};

  showPopover(index: number) {
    this.popoverVisible[index] = true;
  }

  hidePopover(index: number) {
    this.popoverVisible[index] = false;
  }

}
