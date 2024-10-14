import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DocsExampleComponent } from '@docs-components/public-api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
import { NgxPaginationModule } from 'ngx-pagination';
import { UtilisateurService } from 'src/app/services/utilisateurs.service';

type CardColor = {
  color: string
  textColor?: string
}

@Component({
  selector: 'app-EtatRobot',  // Nom de sélecteur en camelCase
  templateUrl: './EtatRobot.component.html',  // Correspond au fichier renommé
  styleUrls: ['./EtatRobot.component.scss'],
  standalone: true,
  imports: [
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
    AlertModule
  
  ]
})
export class EtatRobotComponent  implements OnInit{
  robots: any;
  NbreRobot: any;
  p: any;

  constructor(private modalService: NgbModal, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
this.getRobot();
  }
  getRobot(): void {
    this.utilisateurService.getRobot().subscribe(
      (data) => {
        this.robots = data;
        console.log(data);
        this.NbreRobot = this.robots.length;
      },
      (error) => {
        console.error('Erreur lors de la récupération', error);
      }
    );
  }

  openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}
	open(content: any) {
		this.modalService.open(content);
	}
}



