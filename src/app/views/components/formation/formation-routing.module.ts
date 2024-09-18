import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation.component';

const routes: Routes = [
    {
      path: '',
      component: FormationComponent,
      data: {
        title: 'Formations'
      }
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FormationRoutingModule { }
  