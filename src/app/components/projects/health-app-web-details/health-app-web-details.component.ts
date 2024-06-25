import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-health-app-web-details',
  templateUrl: './health-app-web-details.component.html',
  styleUrls: ['./health-app-web-details.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class HealthAppWebDetailsComponent implements OnInit {
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
      link: 'https://github.com/enrique95ae/HealthApp_Web'
    },
    {
      title: 'API Documentation',
      imageUrl: 'assets/HWA/HWA_API.png',
      description: 'Visit the code hosted on GitHub, explore the project and feel free to clone it and modify it.',
      buttonText: 'See code',
      link: 'https://github.com/enrique95ae/HealthApp_Web'
    }
  ];

  ngOnInit() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll('.observed').forEach(element => {
      observer.observe(element);
    });
  }

  navigateTo(link: string) {
    window.open(link, '_blank');
  }

  downloadFile(fileUrl: string) {
    const linkElement = document.createElement('a');
    linkElement.href = fileUrl;
    linkElement.download = fileUrl.split('/').pop() || '';
    linkElement.click();
  }
}
