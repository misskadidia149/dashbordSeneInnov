import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
       FormsModule,
        ContainerComponent, 
        RowComponent, 
        ColComponent, 
        CardGroupComponent, 
        TextColorDirective, 
        CardComponent, 
        CardBodyComponent, 
        FormDirective, 
        InputGroupComponent, 
        InputGroupTextDirective, 
        IconDirective, 
        FormControlDirective, 
        ButtonDirective, 
        NgStyle
    ]
})
export class LoginComponent {

  // Modèle pour stocker les données du formulaire
  form = {
    username: '',
    password: ''
  };

  // Injection du service de routage
  constructor(private router: Router) { }

  // Méthode pour gérer la soumission du formulaire
  onSubmit() {
    // Logique de validation fictive pour l'exemple
    const isAuthenticated = this.form.username === 'admin' && this.form.password === 'admin'; // Exemple simple de validation

    if (isAuthenticated) {
      // Redirige vers la page principale après une connexion réussie
      this.router.navigate(['/dashboard']); // Changez '/dashboard' par la route souhaitée
    } else {
      // Gère l'échec de la connexion
      console.error('Authentication failed');
    }
  }
}
