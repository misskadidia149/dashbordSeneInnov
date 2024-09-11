import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
// import { DocsExampleComponent } from '@docs-components/public-api';
import {
  AlignDirective,
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardHeaderComponent,
  CardImgDirective,
  CardLinkDirective,
  CardSubtitleDirective,  // Correction ici
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  GutterDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  RowComponent,
  TabDirective,
  TableActiveDirective,
  TableColorDirective,
  TableDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent,
  TextColorDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

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
    AlignDirective
  ]
})
export class EtatRobotComponent {
  constructor() { }
}
