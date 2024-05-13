import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent {
  @Input() text: string = '';
  @Input() visible: boolean = false;
}
