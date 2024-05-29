import { Component, Input } from '@angular/core';

interface ChipItem {
  color: string;
  text: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() demoLink: string | undefined;
  @Input() githubLink: string | undefined;
  @Input() chipItems: ChipItem[] | undefined;
}
