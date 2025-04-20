import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class contactUsComponent {
  latitude = 22.301267;
  langitude = 70.816389;

  onSubmit(data: any) { }

  redirectToGoogleMaps() {
    const url = `https://www.google.com/maps?q=${this.latitude},${this.langitude}`;
    window.open(url, '_blank'); // opens in new tab
  }
}
