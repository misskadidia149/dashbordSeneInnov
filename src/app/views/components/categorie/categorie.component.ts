import { Component, OnInit } from '@angular/core';
// import { DocsExampleComponent } from '@docs-components/public-api';
// import { categoriesComponent } from './categorie.component';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service'; // Assure-toi que le chemin est correct
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';


@Component({
    selector: 'app-categorie',
    templateUrl: './categorie.component.html',
    styleUrls: ['./categorie.component.scss'],
    standalone: true,
    imports: [
      UpdateCategorieComponent,
      RouterModule,
      FormsModule,
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
    ]
})
export class categoriesComponent  implements OnInit {
  env = environment;
  categories: Categorie[] = [];
  NbreCategorie: any;
  searchText:any;
  p:any;
  image: any;
  titre!: String;
	description!: String;
  id:any;
  detailCat: any;
  descriptionMod: any;
  isSuccessful = false;
	isSignUpFailed = false;
	updateFailed = false;
	errorMess = '';
  selectedCategory: any = {}

  
  constructor(private categorieService: CategorieService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}
	open(content: any) {
		this.modalService.open(content);
	}

   //Recuperationn de l'image depuis la formulaire
   recuperationImg(event: any) {
    this.image = event.target["files"][0];
    console.log(this.image)
    }

    		    //La creation de creation d'une categorie
            Create(): void {
              // console.log(this.cat)
              this.categorieService.Creer(this.image,this.titre,this.description).subscribe(
               { next:
                data => {
                  console.log(data);
              this.popUp();
              // this.MessageSuccess();
                  this.isSuccessful = true;
                  this.isSignUpFailed = false;
                  //this.retour();
                },  
                error: err => {
                  this.errorMess = err.error.message;
                  this.isSignUpFailed = true;
                  this.showErrorPopup(this.errorMess);
                }
              }
              );
            }
                       
  //La creation pour recupere la liste des categorie
  getCategories(): void {
    this.categorieService.getCategories().subscribe(
      (data: Categorie[]) => {
        this.categories = data;
        this.NbreCategorie = this.categories.length
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    );
  }

  openDetails(content:any, id:any): void {
    this.categorieService.detail(id).subscribe(
      (data) => {
        this.selectedCategory = data;
        this.modalService.open(content);
        console.log(this.selectedCategory)
        this.id = this.selectedCategory.id
        this.titre = this.selectedCategory.titre
        this.description = this.selectedCategory.description
        console.log(this.id)
        console.log(this.titre)
        console.log(this.description)
      },
      (err) => {
      }
    );
  }

            Delete(id:any){
              this.categorieService.Delete(id).subscribe({
                next: data => { 
                console.log(data);
                },
                error: err => {
                }
               })
              }

          // LISTES DES POPUP
          popUp() {
            Swal.fire({
              position:'center',
              title: 'Catégorie',
              text: 'Ajouter avec sucess!',
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
              // window.location.reload();
              this.getCategories();

              // this.router.navigateByUrl('/dashboard/categories', {skipLocationChange: true}).then(() => {
              //   this.router.navigate(["/dashboard/categories"])
              // })
              }
            })
          }
      
          showErrorPopup(message: string): void {
            Swal.fire({
              icon: 'error',
              title: 'Erreur',
              text: message,
              confirmButtonText: 'Réessayer'
            });
          }
            //Pop up de enregistrement reçu
            MessageSuccess(){
            Swal.fire({
              title: " Categorie creer avec succes",
              showConfirmButton: true,
              confirmButtonText: "OK",
              confirmButtonColor: '#FF7900',
              heightAuto: false
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigateByUrl('/base/categorie', {skipLocationChange: true}).then(() => {
              	this.router.navigate(["/base/categorie"])
                })
            }else if (result.isDenied) {
              //this.router.navigateByUrl('/clinics')
            }
            });
            }

          deletePopUp(id:any) {
            Swal.fire({
              position:'center',
              title: 'Attention',
              text: 'Vous êtes sur le point de supprimer cette catégorie!',
              icon:'warning',
              heightAuto: false,
              showConfirmButton: true,
              confirmButtonText: "D'accord",
              confirmButtonColor: 'warning',
              showCancelButton: true,
              cancelButtonText: 'Annuler',
              showDenyButton: false,
              allowOutsideClick: false
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  position:'center',
                  title: 'Cette action est irréversible',
                  text: '<< La catégorie sera definitivement supprimer, ainsi que les formations qu\'il contient ! >>',
                  icon:'warning',
                  heightAuto: false,
                  showConfirmButton: true,
                  confirmButtonText: "Supprimer",
                  confirmButtonColor: 'red',
                  showCancelButton: true,
                  cancelButtonText: 'Annuler',
                  allowOutsideClick: false
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.Delete(id);
                    // this.getCategories();
                    window.location.reload();
                  }
                })
              }
            })
        
          }
  
    
            back(): void {
            window.history.back()
            }


}

