import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertComponent,
  AlertHeadingDirective,
  AlertLinkDirective,
  ButtonCloseDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TemplateIdDirective,
  TextColorDirective,
  ThemeDirective,
  ModalModule
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { DocsExampleComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    DocsExampleComponent,
    AlertComponent,
    AlertLinkDirective,
    AlertHeadingDirective,
    IconDirective,
    TemplateIdDirective,
    ThemeDirective,
    ButtonCloseDirective,
    ButtonDirective,
    ModalModule  // c'est ici que j'ai importer le modal
  ]
})
export class AlertsComponent implements OnInit {
  isModalVisible = false;
  modalTitle = '';
  modalContent = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // c'est cette partie qui permet d' Ouvrir le modal avec les détails de la notification
  // si tu connecte avec une base tu dois laisser les case mais dans ta base de donnee il doit avoir
  // une colonne pour les type de notification enumere comme : message, alert, success
  // et au niveau de modalTitle c'est le titre, modalContent c'est le message assure toi qu'il se trouve dans ta base
  openNotificationModal(type: string): void {
    switch (type) {
      case 'message':
        this.modalTitle = 'Détail du Message';
        this.modalContent = 'Vous avez reçu un nouveau message de votre administrateur.';
        break;
      case 'alert':
        this.modalTitle = 'Détail de l\'Alerte';
        this.modalContent = 'Une alerte système a été déclenchée à propos de votre serveur.';
        break;
      case 'success':
        this.modalTitle = 'Opération Réussie';
        this.modalContent = 'L\'opération a été complétée avec succès.';
        break;
      default:
        this.modalTitle = 'Notification';
        this.modalContent = 'Détails non disponibles.';
        break;
    }
    this.isModalVisible = true;
  }

  // c'est ici qui gere la fermeture de modal
  closeModal(): void {
    this.isModalVisible = false;
  }
}
