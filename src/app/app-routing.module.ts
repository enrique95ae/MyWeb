import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components here
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HealthAppWebDetailsComponent } from './components/projects/health-app-web-details/health-app-web-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects/health-web-app', component: HealthAppWebDetailsComponent },
  { path: '**', redirectTo: '' }  // Redirect to home if no match
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
