import { Injectable } from '@angular/core';

export interface Toast {
  text: string;
  type: ('success' | 'info' | 'warning' | 'error');
  delayInSeconds?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: Toast[] = []

  show(text: string, type: ('success' | 'info' | 'warning' | 'error'), delayInSeconds?: number) {
    const toast: Toast = { text, type, delayInSeconds }
    if (this.toasts.length >= 5) {
      this.toasts.shift()
    }
    this.toasts.push(toast)
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter(t => t !== toast)
  }
  clear() {
    this.toasts = []
  }
}
