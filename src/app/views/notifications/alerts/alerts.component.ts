import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router'; // Importer Router pour la navigation
import { Router } from '@angular/router'; // Importer Router pour la navigation
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
  ThemeDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { DocsExampleComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, AlertComponent, AlertLinkDirective , AlertHeadingDirective, IconDirective, TemplateIdDirective, ThemeDirective, ButtonCloseDirective, ButtonDirective]
})
export class AlertsComponent implements OnInit {

  visible = [true, true];
  dismissible = true;

  constructor(private router: Router) {} // Injecter Router dans le constructeur

  ngOnInit(): void {
  }

  onAlertVisibleChange(eventValue: any = this.visible) {
    this.visible[1] = eventValue;
  }

  onResetDismiss() {
    this.visible = [true, true];
  }

  onToggleDismiss() {
    this.dismissible = !this.dismissible;
  }

  // Méthode pour gérer la redirection lors du clic sur une alerte
  goToNotificationDetail(type: string) {
    this.router.navigate(['/notification-detail', { type }]);
  }
 
}
