import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { UtilisateurComponent } from './utilisateur.component';

@NgModule({
  declarations: [UtilisateurComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class UtilisateurModule { }
