import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AlertModule, ButtonModule, CardModule, GridModule, ModalModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { AlertsComponent } from './alerts.component';

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;
  let router: Router;
  let navigateSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertModule, ButtonModule, NoopAnimationsModule, GridModule, CardModule, ModalModule, RouterTestingModule.withRoutes([]), AlertsComponent],
      providers: [IconSetService]
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    navigateSpy = spyOn(router, 'navigate');
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the modal with message details', () => {
    component.openNotificationModal('message');
    expect(component.modalTitle).toBe('Détail du Message');
    expect(component.modalContent).toBe('Vous avez reçu un nouveau message de votre administrateur.');
  });

  it('should open the modal with alert details', () => {
    component.openNotificationModal('alert');
    expect(component.modalTitle).toBe('Détail de l\'Alerte');
    expect(component.modalContent).toBe('Une alerte système a été déclenchée à propos de votre serveur.');
  });

  it('should open the modal with success details', () => {
    component.openNotificationModal('success');
    expect(component.modalTitle).toBe('Opération Réussie');
    expect(component.modalContent).toBe('L\'opération a été complétée avec succès.');
  });
});
