import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakComponent } from './componentes/break/break.component';
import { ChileComponent } from './componentes/chile/chile.component';

import { PeruComponent } from './componentes/peru/peru.component';
import { UruguayComponent } from './componentes/uruguay/uruguay.component';

const routes: Routes = [
  {path:'',component:PeruComponent},
  {path:'chile',component:ChileComponent},
  {path:'uruguay',component:UruguayComponent},
  {path:'404',component:BreakComponent},
  {path:'**',redirectTo:'404',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
