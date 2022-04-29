import { Injectable } from '@angular/core';
import { SpToast } from './models/SpToast';

@Injectable({
  providedIn: 'root'
})
export class SpToastService {

  private subscribers: Array<CallableFunction> = [];

  constructor() { }

  subscribe(func: CallableFunction){
    this.subscribers.push(func);
  }

  notify(toast: SpToast){
    this.subscribers.forEach(elem => {
      elem(toast);
    })
  }

  error(title: string, message: string){
    this.notify(new SpToast(title, message, 'error'));
  }

  info(title: string, message: string){
    this.notify(new SpToast(title, message, 'info'));
  }

  success(title: string, message: string){
    this.notify(new SpToast(title, message, 'success'));
  }

  warning(title: string, message: string){
    this.notify(new SpToast(title, message, 'warning'));
  }
  
}
