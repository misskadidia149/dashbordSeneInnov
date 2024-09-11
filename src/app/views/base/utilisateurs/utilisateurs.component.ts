import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconDirective } from '@coreui/icons-angular';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, 
  ToasterComponent, AlignDirective, BorderDirective, TableActiveDirective, TableColorDirective, TableDirective } from '@coreui/angular';
  import { UtilisateurService } from '../../../services/utilisateurs.service';
  import { Utilisateur } from '../../../models/utilisateurs'; // Import du modèle utilisateur (si tu en as un)

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
    this.utilisateurService.getUtilisateurs().subscribe(
      (data: Utilisateur[]) => {
        this.utilisateurs = data; // Stockage des utilisateurs récupérés
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }
}
