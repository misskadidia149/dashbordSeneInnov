import {
  CommonModule
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import {
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
// import { UpdateCategorieComponent } from './views/base/categorie/update-categorie/update-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    // categoriesComponent
    //MessageComponent,
    // UpdateCategorieComponent
  ],
  imports: [
    BrowserModule,
    //LeafletModule,
    BrowserAnimationsModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    IconSetService,
    Title,
    NativeGeocoder,
   // WebView
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
