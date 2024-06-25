import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {

   title: string = 'Contact me';
  description: string = 'Feel free to contact me through any of the following:';

  websiteUrl: string = 'https://www.linkedin.com/in/enrique-alonso-esposito-8a5827149/';

  recipient: string = 'enrique95ae@gmail.com';
  subject: string = '[Enrique.dev] Interested in your portfolio!';

  fileUrl: string = 'path/to/your/file.pdf';

  openWebsite() {
    window.open(this.websiteUrl, '_blank');
  }

  sendEmail() {
    const mailtoLink = `mailto:${this.recipient}?subject=${encodeURIComponent(this.subject)}`;
    window.location.href = mailtoLink;
  }

  downloadFile() {
    const link = document.createElement('a');
    link.href = this.fileUrl;
    link.download = this.fileUrl.substring(this.fileUrl.lastIndexOf('/') + 1);
    link.click();
  }

}
