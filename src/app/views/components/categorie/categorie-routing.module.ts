import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { categoriesComponent } from './categorie.component';

const routes: Routes = [
    {
      path: '',
      component: categoriesComponent,
      data: {
        title: 'Categorie'
      }
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CategorieRoutingModule { }
  