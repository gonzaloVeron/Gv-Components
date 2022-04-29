import { Component, Input, OnInit } from '@angular/core';
import { SpToast } from '../../models/SpToast';
import { SpToastService } from '../../sp-toast.service';

@Component({
  selector: 'sp-toast-container',
  templateUrl: './sp-toast-container.component.html',
  styleUrls: ['./sp-toast-container.component.scss']
})
export class SpToastContainerComponent implements OnInit {

  toasts: Array<SpToast> = [];
  @Input('time') time: number;
  @Input('withSound') withSound: boolean;

  constructor(private toastService: SpToastService) { }

  ngOnInit() {
    this.toastService.subscribe((toast) => {
      this.toasts.unshift(toast);  
    })
  }
// I
//   addToast(toast){
//     this.toasts.unshift(toast);
//   }

  removeToast(e){
    setTimeout(() => {
      this.toasts.splice(e, 1);
    }, 1000)
  }
}
