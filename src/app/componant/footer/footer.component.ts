import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  latitude = 22.301267;
  langitude = 70.816389;

  redirectToGoogleMaps() {
    const url = `https://www.google.com/maps?q=${this.latitude},${this.langitude}`;
    window.open(url, '_blank'); // opens in new tab
  }
}
