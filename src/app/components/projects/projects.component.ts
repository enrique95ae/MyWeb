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
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          },
          {
            imageUrl: 'path_to_image2.jpg',
            title: 'Project Title 2',
            description: 'Description for Project 2'
          }
        ];
    }
    else if(selectedOption === 'backend'){
            this.projects = [
          {
            imageUrl: '',
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          }
        ];
    }
}

}
