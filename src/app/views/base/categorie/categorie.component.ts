import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { DocsExampleComponent } from '@docs-components/public-api';
// import { categoriesComponent } from './categorie.component';
import { CategorieService } from 'src/app/services/categorie.service'; // Assure-toi que le chemin est correct
import { Categorie } from 'src/app/models/categorie';


import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, PageItemComponent, PageLinkDirective } from '@coreui/angular';

@Component({
    selector: 'app-categorie',
    templateUrl: './categorie.component.html',
    styleUrls: ['./categorie.component.scss'],
    standalone: true,
    imports: [
      RowComponent,
      ColComponent, 
      TextColorDirective, 
      CardComponent, 
      CardHeaderComponent, 
      CardBodyComponent,
      //  DocsExampleComponent,
        // categorieComponent,
         PageItemComponent, PageLinkDirective, RouterLink]
})
export class categoriesComponent  implements OnInit {
  categories: Categorie[] = [];
  constructor(private categorieService: CategorieService) { }
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categorieService.getCategories().subscribe(
      (data: Categorie[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    );
  }
}

