import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';
import { NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from './dropdown/dropdown.component';
@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule,
    NgbDropdownModule
  ],
  declarations: [
    ExampleAComponent,
    ExampleBComponent,
    DropdownComponent
  ],
  exports:[
    ExampleAComponent,
    ExampleBComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
