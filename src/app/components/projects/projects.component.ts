import { Component } from '@angular/core';

interface ChipItem {
  color: string;
  text: string;
}

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
  chipItems?: ChipItem[];
  detailsLink?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


export class ProjectsComponent {
  projects: Project[] = [
    {
      imageUrl: 'assets/HWA/HWA_Home.png',
      title: 'Health Web App',
      description: 'This is a smart health web application that helps users to track their health and fitness goals. It has a user-friendly interface and provides a seamless experience to the users. It is developed using Angular and integrates my custom-made Python Flask API. Among the features are account creation, user authentication, meal creation, weight tracking, food database consults, workouts management, schedule planner, PDF generation and more!',
      demoLink: '',
      githubLink: 'https://github.com/enrique95ae/HealthApp_Web',
      chipItems: [
        { color: '#C3002F', text: 'Angular' },
        { color: '#52ad11', text: 'Web Development' },
        { color: '#4584B6', text: 'REST API Integration' }
      ],
      detailsLink: '/projects/health-web-app'
    },
    {
      imageUrl: 'assets/AirlineManagerSeatCalculator.png',
      title: 'AM4 Seat Calculator',
      description: 'A simple Angular one-page website that helps Airline Manager 4 players find the optimal seat distribution for their planes. It visually replicates an avionics MCDU system. It takes 4 inputs and returns the optimal distribution based on the provided data.',
      demoLink: 'https://enrique95ae.github.io/AirlineManagerSeatCalculator/',
      githubLink: 'https://github.com/enrique95ae/AirlineManagerSeatCalculator',
      chipItems: [
        { color: '#C3002F', text: 'Angular' },
        { color: '#52ad11', text: 'Web Development' }
      ]
    }
  ];
  handleSelection(selectedOption: string) {
    if (selectedOption === 'mobile') {
      this.projects = [
        
      ];
    } else if (selectedOption === 'web') {
      this.projects = [
        {
          imageUrl: 'assets/HWA/HWA_Home.png',
          title: 'Health Web App',
          description: 'This is a smart health web application that helps users to track their health and fitness goals. It has a user-friendly interface and provides a seamless experience to the users. It is developed using Angular and integrates my custom-made Python Flask API. Among the features are account creation, user authentication, meal creation and tracking, weight tracking, food database consults and more!',
          demoLink: '',
          githubLink: 'https://github.com/enrique95ae/HealthApp_Web',
          chipItems: [
            { color: '#C3002F', text: 'Angular' },
            { color: '#52ad11', text: 'Web Development' },
            { color: '#4584B6', text: 'REST API Integration' }
          ],
          detailsLink: '/projects/health-web-app'
        },
        {
          imageUrl: 'assets/AirlineManagerSeatCalculator.png',
          title: 'AM4 Seat Calculator',
          description: 'A simple Angular one-page website that helps Airline Manager 4 players find the optimal seat distribution for their planes. It visually replicates an avionics MCDU system. It takes 4 inputs and returns the optimal distribution based on the provided data.',
          demoLink: 'https://enrique95ae.github.io/AirlineManagerSeatCalculator/',
          githubLink: 'https://github.com/enrique95ae/AirlineManagerSeatCalculator',
          chipItems: [
            { color: '#C3002F', text: 'Angular' },
            { color: '#52ad11', text: 'Web Development' }
          ]
        }
      ];
    } else if (selectedOption === 'backend') {
      this.projects = [
        {
          imageUrl: 'assets/HWA/HWA_API.png',
          title: 'Health Web App API',
          description: 'This is a custom-made API for the Health Web App. It is developed using Python Flask and integrates with the Angular front-end. Among the features are user authentication, meal creation and tracking, weight tracking, food database consults and more!',
          demoLink: '',
          githubLink: 'https://github.com/enrique95ae/HealthApp_API',
          chipItems: [
            { color: '#FFDE57', text: 'Python' },
            { color: '#4584B6', text: 'REST API' },
            { color: '#B00B69', text: 'SQL' }
          ]
        }
      ];
    }
    else if (selectedOption === 'other') {
      this.projects = [
        {
          imageUrl: 'assets/HWA/HWA_API.png',
          title: 'Code comments remover',
          description: 'Simple program that removes the comments from all the files of an specified extension in a specific path and sub-folders. The GUI is created with TKInter. Supports: .css, .ts, .cs, .cpp and .py files and both inline and block comments.',
          demoLink: '',
          githubLink: 'https://github.com/enrique95ae/HealthApp_API',
          chipItems: [
            { color: '#FFDE57', text: 'Python' },
            { color: '#4584B6', text: 'TkInter' },
          ]
        },
         {
          imageUrl: 'assets/HWA/HWA_API.png',
          title: 'Bin & Obj delete',
          description: 'For all the .NET developers, especially those working with Xamarin and MAUI, who struggle with the persistent compilation bugs in Visual Studio, this tool is here to help. It assists in deleting all the bin and obj folders of your solutions, and combined with a clean and rebuild, it should eliminate those annoying compile-time errors.',
          demoLink: '',
          githubLink: 'https://github.com/enrique95ae/HealthApp_API',
          chipItems: [
            { color: '#FFDE57', text: 'Python' },
            { color: '#4584B6', text: 'TkInter' },
          ]
        }
      ];
    }
  }
}
