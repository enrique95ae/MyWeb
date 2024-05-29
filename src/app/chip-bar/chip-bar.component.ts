import { Component, Input } from '@angular/core';

interface ChipItem {
  color: string;
  text: string;
}

@Component({
  selector: 'app-chip-bar',
  templateUrl: './chip-bar.component.html',
  styleUrls: ['./chip-bar.component.css']
})
export class ChipBarComponent {
  @Input() items: ChipItem[] = [];
}
