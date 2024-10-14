import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  AlertModule,
  AlignDirective, AvatarModule, BadgeComponent, BadgeModule, BorderDirective,
  ButtonDirective,
  ButtonGroupModule,
  ButtonModule,
  CardBodyComponent,
  CardComponent, CardHeaderComponent,
  CardModule,
  ColComponent,
  DropdownModule,
  FormModule,
  GridModule,
  ModalModule,
  NavModule,
  PaginationModule,
  ProgressModule,
  RowComponent,
  SharedModule,
  TableActiveDirective, TableColorDirective, TableDirective,
  TableModule,
  TabsModule,
  TextColorDirective,
  WidgetModule
} from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule } from '@coreui/icons-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { Agriculteur } from 'src/app/models/agriculteur';
import { User } from 'src/app/models/utilisateurs';
import { UtilisateurService } from 'src/app/services/utilisateurs.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    TableDirective,
    TableColorDirective,
    TableActiveDirective,
    AlignDirective,
    PaginationModule,
    NgxPaginationModule,
    BadgeComponent,
    ButtonDirective,
    BorderDirective,
    ModalModule,
    FormModule,
    FormsModule,
    RouterModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    FormModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    CardModule,
    GridModule,
    BadgeModule,
    PaginationModule,
    NgxPaginationModule,
    WidgetModule,
    DropdownModule,
    SharedModule,
    AlertModule,
  ]
})
export class UtilisateursComponent implements OnInit {
  utilisateurs: User[] = [];
  users:any
  p:any;
  NbreUser:any;
  image:any;
  nomEtPrenom: any;
  username: any;
  telephone: any;
  password: any;
  errorMess = '';
  env = environment;
  selectedUser: any = {}
  id:any;
  robot!:boolean;


  constructor(private utilisateurService: UtilisateurService) { } // Injection du service

  ngOnInit(): void {
    this.getUtilisateurs(); // Appel de la méthode pour récupérer les utilisateurs au chargement du composant
  }

  recuperationImg(event: any) {
    this.image = event.target["files"][0];
    console.log(this.image)
    }

    Create(): void {
      // console.log(this.cat)
      this.utilisateurService.createUtilisateur(this.nomEtPrenom,this.username, this.telephone, this.password).subscribe(
       { next:
        data => {
          console.log(data);
      this.popUp();
        },
        error: err => {
          this.errorMess = err.error.message;
          this.showErrorPopup(this.errorMess);
        }
      }
      );
    }

    openUser(id:any): void {
      this.utilisateurService.detail(id).subscribe(
        (data) => {
          this.selectedUser = data;
          // this.modalService.open(content, { size: 'lg' });
          console.log(this.selectedUser);
  
          this.id = this.selectedUser[0].id
          this.nomEtPrenom = this.selectedUser[0].nomEtPrenom
          this.username = this.selectedUser[0].username
          this.telephone = this.selectedUser[0].telephone
          this.robot = this.selectedUser[0].robot

          console.log(this.id);
          console.log(this.nomEtPrenom);
          console.log(this.username);
          console.log(this.telephone);
          console.log(this.robot);
        },
        (err) => {
        }
      );
    }

  // Méthode pour récupérer les utilisateurs depuis le service
  getUtilisateurs(): void {
    this.utilisateurService.getAllUser().subscribe(
      (data: Agriculteur[]) => {
        this.users = data; // Stockage des utilisateurs récupérés
        console.log(data);
        this.NbreUser = this.users.length;
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }

            // LISTES DES POPUP
            popUp() {
              Swal.fire({
                position:'center',
                title: 'Utilisateur',
                text: 'Ajouter avec success!',
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
                this.getUtilisateurs();
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

            Delete(id:any){
              this.utilisateurService.delete(id).subscribe({
                next: data => {
                console.log(data);
                },
                error: err => {
                }
               })
              }

              deletePopUp(id:any) {
                Swal.fire({
                  position:'center',
                  title: 'Attention',
                  text: 'Etes-vous sûr de vouloir supprimer cet utilisateur ?',
                  icon:'warning',
                  heightAuto: false,
                  showConfirmButton: true,
                  confirmButtonText: "Supprimer",
                  confirmButtonColor: 'danger',
                  showCancelButton: true,
                  cancelButtonText: 'Annuler',
                  showDenyButton: false,
                  allowOutsideClick: false
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.Delete(id);
                    window.location.reload();
                  }
                })
            
              }
      






}



