import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import { FormationService } from 'src/app/services/formation.services';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-formation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './update-formation.component.html',
  styleUrl: './update-formation.component.scss'
})
export class UpdateFormationComponent implements OnInit {
  categories: Categorie[] = [];
  env = environment;
  detailFormation: any;
  formation:any;
  content: any;
  image: any;
  searchText:any;
  p:any;
  title!: String;
	description: any;
  instructeur: any;
  subtitle:any;
  id:any;
  isSuccessful = false;
	isSignUpFailed = false;
	updateFailed = false;
	errorMess = '';
  idCat:any;
  selectedFormartion: any = {}
  date:any;
  category_id:any;
  category_title:any;
  isLiked!: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router, private formationService: FormationService,
    private categorieService: CategorieService){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log("param id => "+ id)

  this.formationService.detail(id).subscribe(
    (data) => {
      this.detailFormation = data;
      console.log(this.detailFormation)
          this.id = this.detailFormation.id
          this.title = this.detailFormation.title
          this.subtitle = this.detailFormation.subtitle
          this.description = this.detailFormation.description
          this.instructeur = this.detailFormation.instructeur
          this.image = this.detailFormation.image
          this.date = this.detailFormation.date
          this.category_id = this.detailFormation.categories.id
          this.category_title = this.detailFormation.categories.title
          this.isLiked = this.detailFormation.isLiked
    },
    (err) => {
    }
  );

  this.getCategories();
  }


     //Recuperationn de l'image depuis la formulaire
     recuperationImg(event: any) {
      this.image = event.target["files"][0];
      console.log(this.image)
      }
  
                      //La creation de la specialite
      UpdateFormation(): void {
        this.formationService.Update(this.image,this.title,this.subtitle,this.description,this.instructeur, this.id).subscribe(
         { next:
          data => {
            console.log(data);
            console.log(this.id)
            // if(this.image == null){
            //   this.alertImage=true
            //   this.errorMess="  Veuillez ajoutez une image !"
            // } else {
            //   this.popUp();
            // }
            this.popUp();
          }, 
            error: err => {
              console.log(err);
            this.errorMess = err.body.message;
            this.updateFailed = true;
            this.showErrorPopup(this.errorMess);
            }
          
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
            text: 'Modifier avec success!',
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
            this.router.navigateByUrl('/dashboard/formations', {skipLocationChange: true}).then(() => {
              this.router.navigate(["/dashboard/formations"])
            })
            // window.location.reload();
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
  
          retour(): void {
            window.history.back()
          }

}
