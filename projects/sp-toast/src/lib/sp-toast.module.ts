import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpToastContainerComponent } from './components/sp-toast-container/sp-toast-container.component';
import { SpToastComponent } from './sp-toast.component';
import { SpToastService } from './sp-toast.service';



@NgModule({
  declarations: [
    SpToastComponent,
    SpToastContainerComponent
  ],
  providers: [
    SpToastService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpToastComponent,
    SpToastContainerComponent
  ]
})
export class SpToastModule { }
