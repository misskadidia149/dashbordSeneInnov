import { Component, OnInit } from '@angular/core';
import {
  AlignDirective, BorderDirective,
  CardBodyComponent,
  CardComponent, CardHeaderComponent,
  ColComponent,
  RowComponent,
  TableActiveDirective, TableColorDirective, TableDirective,
  TextColorDirective
} from '@coreui/angular';
import { Utilisateur } from '../../../models/utilisateurs'; // Import du modèle utilisateur (si tu en as un)
import { UtilisateurService } from '../../../services/utilisateurs.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
  standalone: true,
  imports: [
    RowComponent, 
    ColComponent, 
    TextColorDirective, 
    CardComponent, 
    CardHeaderComponent, 
    CardBodyComponent, 
    TableDirective, 
    TableColorDirective,
    TableActiveDirective,
    BorderDirective, 
    AlignDirective
  ]
})
export class UtilisateursComponent implements OnInit {
  utilisateurs: Utilisateur[] = []; // Propriété pour stocker la liste des utilisateurs

  constructor(private utilisateurService: UtilisateurService) { } // Injection du service

  ngOnInit(): void {
    this.getUtilisateurs(); // Appel de la méthode pour récupérer les utilisateurs au chargement du composant
  }

  // Méthode pour récupérer les utilisateurs depuis le service
  getUtilisateurs(): void {
    this.utilisateurService.getAllUser().subscribe(
      (data: Utilisateur[]) => {
        this.utilisateurs = data; // Stockage des utilisateurs récupérés
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }
}
