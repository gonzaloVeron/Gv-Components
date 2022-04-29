import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sp-toast',
  templateUrl: './sp-toast.component.html',
  styleUrls: ['./sp-toast.component.scss'],
})
export class SpToastComponent implements OnInit {

  toastSound: any;
  toastHtml: any;
  @Input('title') title: string;
  @Input('message') message: string;
  @Input('type') type: string;
  @Input('id') id: string;
  @Input('time') time: number;
  @Input('withSound') withSound: boolean;
  @Output('onClose') onClose: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if(this.withSound){
      this.toastSound = new Audio("./assets/sounds/notif.mp3");
    }
    setTimeout(() => {
      this.toastHtml = document.getElementById(this.id);
      if(this.withSound){
        this.toastSound.play();
      }
      setTimeout(() => { 
        this.aparecer(this.toastHtml);
        setTimeout(() => {
          this.desaparecer(this.toastHtml);
        }, this.time);
      }, 0);
    }, 0);
  }

  ngOnDestroy(): void {
    clearTimeout();
  }

  cancel(){
    this.desaparecer(this.toastHtml);
    this.onClose.emit(this.id.charAt(this.id.length - 1));
  }

  aparecer(toast){
    toast.style.transform = "translateX(0)";
  }

  desaparecer(toast){
    toast.style.transform = "translate(400px)";
    this.onClose.emit(this.id.charAt(this.id.length - 1));
  }
}
