import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeruComponent } from './peru/peru.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';
import { BreakComponent } from './break/break.component';



@NgModule({
  declarations: [
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    BreakComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    BreakComponent
  ]
  
})
export class ComponentesModule { }
