import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
projects = [
    {
      imageUrl: 'path_to_image1.jpg',
      title: 'Project Title 1',
      description: 'Description for Project 1'
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
    // Add more projects as needed
  ];
}
