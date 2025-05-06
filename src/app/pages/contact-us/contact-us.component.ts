import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class contactUsComponent {
  latitude = 22.301267;
  langitude = 70.816389;

  constructor(
    private readonly router: Router,
    private readonly toastr: ToastrService,
  ) {

  }

  onSubmit(data: any) {
    this.toastr.success('Your inquiry has been submitted successfully!')
    this.router.navigate(['/']);
  }

  // redirectToGoogleMaps() {
  //   const url = `https://www.google.com/maps?q=${this.latitude},${this.langitude}`;
  //   window.open(url, '_blank'); // opens in new tab
  // }
}
