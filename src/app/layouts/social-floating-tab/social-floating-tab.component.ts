import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-floating-tab',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './social-floating-tab.component.html',
  styleUrl: './social-floating-tab.component.scss'
})
export class SocialFloatingTabComponent {
  faFacebook = faFacebook
  faInstagram = faInstagram
  faPhone = faPhone
}
