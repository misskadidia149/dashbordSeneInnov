import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-categorie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  templateUrl: './update-categorie.component.html',
  styleUrl: './update-categorie.component.scss'
})
export class UpdateCategorieComponent implements OnInit{
  detailCat: any;
  titre: any;
  descriptionMod: any;
  searchText:any;
	p:any;
	libelle!: string;
	image: any;
	description!: string;
  id: any;
  errorMess: any;
  updateFailed= false;
  alertImage: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private categorieService: CategorieService){}

  ngOnInit(): void {
     const id = this.route.snapshot.params['id'];
      console.log("param id => "+ id)

    this.categorieService.detail(id).subscribe(
      (data) => {
        this.detailCat = data;
        console.log(this.detailCat)
        this.id = this.detailCat.id
        this.titre = this.detailCat.titre
        this.description = this.detailCat.description
        console.log(this.id)
        console.log(this.titre)
        console.log(this.description)
      },
      (err) => {
      }
    );
  }

   //Recuperationn de l'image depuis la formulaire
   recuperationImg(event: any) {
    this.image = event.target["files"][0];
    console.log(this.image)
    }

                  	//La creation de la specialite
		UpdateCategorie(): void {
			this.categorieService.Update(this.image,this.titre,this.description,this.id).subscribe(
			 { next:
			  data => {
			    console.log(data);
          console.log(this.id)
          if(this.image == null){
            this.alertImage=true
            this.errorMess="  Veuillez ajoutez une image !"
          } else {
            this.popUp();
          }
			  //this.retour();
			  }, 
          error: err => {
            console.log(err);
          this.errorMess = err.body.message;
          this.updateFailed = true;
          }
        
			}
			);
			}

      popUp() {
        Swal.fire({
          position:'center',
          title: 'Categorie',
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
          this.router.navigateByUrl('/base/categorie', {skipLocationChange: true}).then(() => {
            this.router.navigate(["/base/categorie"])
          })
          // window.location.reload();
          }
        })
      
        }


        retour(): void {
          window.history.back()
        }



}
