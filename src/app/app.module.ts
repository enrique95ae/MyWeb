import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'; // Make sure RouterModule is imported

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './components/about/timeline/timeline.component';
import { ExperienceComponent } from './components/about/experience/experience.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ToggleComponent } from './components/projects/toggle/toggle.component';
import { PopoverComponent } from './components/utils/popover/popover.component';
import { QuoteComponent } from './components/home/quote/quote.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        ProjectsComponent,
        ContactComponent,
        ProjectComponent,
        ToggleComponent,
        PopoverComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        TimelineComponent,
        ExperienceComponent,
        QuoteComponent
    ]
})
export class AppModule { }
