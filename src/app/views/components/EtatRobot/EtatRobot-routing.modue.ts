import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtatRobotComponent } from './EtatRobot.component';

const routes: Routes = [
    {
      path: '',
      component: EtatRobotComponent,
      data: {
        title: 'Etat robots'
      }
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EtatRobotRoutingModule { }
  