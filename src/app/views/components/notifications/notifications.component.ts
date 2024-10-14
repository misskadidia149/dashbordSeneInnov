import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AvatarModule,
  BadgeModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ModalModule,
  NavModule,
  PaginationModule,
  ProgressModule,
  SharedModule,
  TableModule,
  TabsModule,
  WidgetModule,
} from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule } from '@coreui/icons-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { Notifications } from 'src/app/models/notification';
import { NotificationService } from '../../../services/notification.service';


@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
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
    CommonModule,
    ChartjsModule,
    CardModule,
    GridModule,
    BadgeModule,
    PaginationModule,
    WidgetModule,
    DropdownModule,
    SharedModule,
    NgxPaginationModule,
    // Ng2SearchPipeModule,
    ModalModule
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit{
  isModalVisible = false;
  modalTitle = '';
  modalContent = '';
  NbreNotification: any;
  // notif: any;
  p:any;
  notif: Notifications[] = [];


  constructor(private notification: NotificationService) {}
  
  ngOnInit(): void {
    this.getNotifications();
  }

    getNotifications(): void {
      this.notification.getNotificationDESC().subscribe(
        (data: Notifications[]) => {
          this.notif = data;
          console.log(data);
          this.NbreNotification = this.notif.length
        },
        (error) => {
          console.error('Erreur lors de la récupération.', error);
        }
      );
    }

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
