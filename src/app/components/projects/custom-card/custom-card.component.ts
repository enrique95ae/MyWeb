import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
  @Input() link: string = '';
  @Input() fileUrl: string = '';

  navigateTo() {
    if (this.link) {
      window.open(this.link, '_blank');
    } else if (this.fileUrl) {
      const linkElement = document.createElement('a');
      linkElement.href = this.fileUrl;
      linkElement.download = this.fileUrl.split('/').pop() || '';
      linkElement.click();
    }
  }
}
