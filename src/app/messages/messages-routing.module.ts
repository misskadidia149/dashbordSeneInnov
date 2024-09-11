import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';

const routes: Routes = [
    {
      path: '',
      component: MessagesComponent,
      data: {
        title: 'Map'
      }
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MessagesRoutingModule { }
  