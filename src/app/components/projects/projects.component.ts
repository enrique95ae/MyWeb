import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
projects = [
    {
      imageUrl: 'assets/carRental.png',
      title: 'Lorem Ipsum',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      imageUrl: 'assets/game.png',
      title: 'Project Title 2',
      description: 'Description for Project 2'
    },
    {
      imageUrl: 'path_to_image3.jpg',
      title: 'Project Title 3',
      description: 'Description for Project 3'
    }
  ];

  handleSelection(selectedOption: string) {
    if(selectedOption === 'mobile'){
      this.projects = [
          {
            imageUrl: 'assets/carRental.png',
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          },
          {
            imageUrl: 'path_to_image2.jpg',
            title: 'Project Title 2',
            description: 'Description for Project 2'
          },
          {
            imageUrl: 'path_to_image3.jpg',
            title: 'Project Title 3',
            description: 'Description for Project 3'
          }
        ];
    }
    else if(selectedOption === 'web'){
      this.projects = [
          {
            imageUrl: 'assets/HWA_Screenshot.png',
            title: 'Health Web App',
            description: 'This is a smart health web application that helps users to track their health and fitness goals. It has a user-friendly interface and provides a seamless experience to the users. It is developed using Angular and integrates my custom made Python Flask API. Among the features are account creation, user authentication, meal creation and tracking, weight tracking, food database consults and more! '
          },
          {
            imageUrl: 'assets/AirlineManagerSeatCalculator.png',
            title: 'AM4 Seat Calculator',
            description: 'A simple Angular one page website that helps Airline Manager 4 players find the optimal seat distribution for their planes. It visually replicates an avionics EFIS system. It takes 4 inputs and returns the optimal distribution based on the provided data.'
          }
        ];
    }
    else if(selectedOption === 'backend'){
            this.projects = [
          {
            imageUrl: 'assets/HWA_API.png',
            title: 'Health Web App API',
            description: 'This is a custom made API for the Health Web App. It is developed using Python Flask and integrates with the Angular front-end. Among the features are user authentication, meal creation and tracking, weight tracking, food database consults and more! '
          }
        ];
    }
}

}
