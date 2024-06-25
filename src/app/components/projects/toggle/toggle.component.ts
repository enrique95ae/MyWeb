import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Output() selectionChange = new EventEmitter<string>();
  selected = 'web'; // Default selected option

  select(option: string) {
    this.selected = option;
    this.selectionChange.emit(this.selected); // Emit selection state to parent
  }
}
