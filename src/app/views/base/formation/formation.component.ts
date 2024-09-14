import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AlertModule,
  AlignDirective,
  AvatarModule,
  BadgeModule,
  BorderDirective,
  ButtonGroupModule,
  ButtonModule,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardModule,
  ColComponent,
  DropdownModule,
  FormModule,
  GridModule,
  NavModule,
  PaginationModule,
  ProgressModule,
  RowComponent,
  SharedModule,
  TableActiveDirective,
  TableColorDirective,
  TableDirective,
  TableModule,
  TabsModule,
  TextColorDirective,
  WidgetModule
} from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule } from '@coreui/icons-angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Categorie } from 'src/app/models/categorie';
import { Formation } from 'src/app/models/formation';
import { CategorieService } from 'src/app/services/categorie.service';
import { FormationService } from 'src/app/services/formation.services'; // Assure-toi que le chemin est correct
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [
    FormModule,
    RowComponent, 
    ColComponent, 
    TextColorDirective, 
    CardComponent, 
    CardHeaderComponent, 
    CardBodyComponent, 
    // DocsExampleComponent, 
    TableDirective, 
    TableColorDirective, 
    TableActiveDirective, 
    BorderDirective, 
    AlignDirective,
    CommonModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    //WidgetsModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    PaginationModule,
    NgxPaginationModule,
    // Ng2SearchPipeModule,
    WidgetModule,
    DropdownModule,
    SharedModule,
    AlertModule,
  ],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss'
})
export class FormationComponent implements OnInit{
  categories: Categorie[] = [];
  formation:any;
  env = environment;
  NbreFomation: any;
  content: any;
  image: any;
  searchText:any;
  p:any;
  titre!: String;
	description!: String;
  instructeur: any;
  subtitle:any;
  id:any;
  isSuccessful = false;
	isSignUpFailed = false;
	updateFailed = false;
	errorMess = '';
  idCat:any;

  constructor(private modalService: NgbModal,
    private formationService: FormationService,
    private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.getFormation();
    this.getCategories();
  }

  openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}
  open(content: any) {
		this.modalService.open(content);
	}

  recuperationImg(event: any) {
    this.image = event.target["files"][0];
    console.log(this.image)
    }

    onCreate(): void {
      this.formationService.Creer(this.image,this.titre,this.subtitle,this.instructeur,this.description,this.idCat).subscribe(
       { next:
        data => {
          console.log("data categorie créer => " + data);
          this.popUp();
          // this.MessageSuccess();
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          //this.retour();
        },
        error: err => {
          this.errorMess = err.error.message;
          this.isSignUpFailed = true;
        }
      }
      );
    }


    //La creation pour recupere la liste des categorie
    getFormation(): void {
      this.formationService.getAllFormation().subscribe(
        (data: Formation[]) => {
          this.formation = data;
          this.NbreFomation = this.formation.length
        },
        (error) => {
          console.error('Erreur lors de la récupération des formations', error);
        }
      );
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
  

    popUp() {
      Swal.fire({
        position:'center',
        title: 'Formation',
        text: 'Création reussi!',
        icon:'success',
        heightAuto: false,
        showConfirmButton: true,
        confirmButtonText: "OK",
        confirmButtonColor: '#0857b5',
        showDenyButton: false,
        showCancelButton: false,
        allowOutsideClick: false
      }).then((result) => {
        if (result.isConfirmed) {
        window.location.reload();
        }
      })
    }

}
