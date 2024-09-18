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
    // Ng2SearchPipeModule
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit{


  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    //this.listeFeedback();
  }


}
