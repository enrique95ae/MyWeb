import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { FooterComponent } from './components/home/footer/footer.component';
import { ContactInfoComponent } from './components/contact/contact-info/contact-info.component';
import { ChipBarComponent } from './chip-bar/chip-bar.component';
import { HealthAppWebDetailsComponent } from './components/projects/health-app-web-details/health-app-web-details.component';
import { CustomCardComponent } from './components/projects/custom-card/custom-card.component';

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
        PopoverComponent,
        ChipBarComponent,
        HealthAppWebDetailsComponent,
        CustomCardComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        TimelineComponent,
        ExperienceComponent,
        QuoteComponent,
        FooterComponent,
        ContactInfoComponent,
    ]
})
export class AppModule { }
