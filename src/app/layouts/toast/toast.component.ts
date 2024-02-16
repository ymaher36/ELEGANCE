import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './toast.service';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { CommonModule, NgClass } from '@angular/common';
import { faCircleInfo, faClose, faWarning } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgbToastModule, FontAwesomeModule, CommonModule, NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  host: { class: 'toast-container position-fixed end-0 bottom-0', style: 'z-index:1200' }
})
export class ToastComponent {
  toastService = inject(ToastService)

  successIcon = faCircleCheck
  infoIcon = faCircleInfo
  warningIcon = faWarning
  errorIcon = faClose


  backgroundColor(type: string) {
    switch (type) {
      case 'success':
        return 'bg-success'
      case 'info':
        return 'bg-info'
      case 'warning':
        return 'bg-warning'
      case 'error':
        return 'bg-danger'
      default:
        return ''
    }
  }

}
