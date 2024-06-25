import { Component } from '@angular/core';

@Component({
  selector: 'app-health-app-web-details',
  templateUrl: './health-app-web-details.component.html',
  styleUrls: ['./health-app-web-details.component.css']
})
export class HealthAppWebDetailsComponent {
  cards = [
    {
      title: 'SRS Documentation',
      imageUrl: 'assets/HWA/SRS.png',
      description: 'Visit the Software Requirements Specification to learn more about the technical details of this website.',
      buttonText: 'Download SRS',
      fileUrl: 'assets/HWA/SRS.pdf'
    },
    {
      title: 'GitHub repository',
      imageUrl: 'assets/GitHub.png',
      description: 'Visit the code hosted on GitHub, explore the project and feel free to clone it and modify it.',
      buttonText: 'See code',
      link: 'https://github.com/your-repo'
    }
  ];

  navigateTo(link: string) {
    window.open(link, '_blank');
  }

  downloadFile(fileUrl: string) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop() || '';
    link.click();
  }
}
