import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class contactUsComponent {
  latitude: number = 22.301267;
  langitude: number = 70.816389;

  constructor(
    private readonly router: Router,
    private readonly toastr: ToastrService,
  ) { }

  onSubmit(data: any) {
    this.sendEmail(data);
  }

  sendEmail(form: any) {
    const templateParams = {
      name: form.value?.name,
      email: form.value?.email,
      phone: form.value?.phone,
      product: form.value?.product || 'Not specified',
      title: form.value?.subject || 'No subject provided',
      message: form.value?.message,
      time: new Date().toLocaleString(),
    };

    emailjs.send(
      'service_4y6qju4',
      'template_rx59p89',
      templateParams,
      'Dfgj66wodoOAVH9jR'
    ).then(
      (response) => {
        this.toastr.success('Your inquiry has been submitted successfully!')
        this.router.navigate(['/']);
        form.resetForm();
      },
      (error) => {
        console.error('FAILED...', error);
        this.toastr.error('Message failed to send.');
      }
    );
  }

  redirectToGoogleMaps() {
    const url = `https://www.google.com/maps?q=${this.latitude},${this.langitude}`;
    window.open(url, '_blank'); // opens in new tab
  }
}
