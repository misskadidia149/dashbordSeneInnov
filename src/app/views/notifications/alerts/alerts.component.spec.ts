import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { Router, RouterTestingModule } from '@angular/router/testing'; // Importer Router et RouterTestingModule
// import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; // Correct import
import { Router } from '@angular/router'; // Importer Router pour les tests de navigation


import { AlertModule, ButtonModule, CardModule, GridModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { AlertsComponent } from './alerts.component';

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;
  let router: Router; // Déclarer une variable pour Router
  let navigateSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertModule, ButtonModule, NoopAnimationsModule, GridModule, CardModule, RouterTestingModule.withRoutes([]), AlertsComponent],
      providers: [IconSetService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router); // Injecter Router
    navigateSpy = spyOn(router, 'navigate'); // Espionner la méthode navigate

    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to notification detail on message alert click', () => {
    component.goToNotificationDetail('message');
    expect(navigateSpy).toHaveBeenCalledWith(['/notification-detail', { type: 'message' }]);
  });

  it('should navigate to notification detail on alert click', () => {
    component.goToNotificationDetail('alert');
    expect(navigateSpy).toHaveBeenCalledWith(['/notification-detail', { type: 'alert' }]);
  });

  it('should navigate to notification detail on success alert click', () => {
    component.goToNotificationDetail('success');
    expect(navigateSpy).toHaveBeenCalledWith(['/notification-detail', { type: 'success' }]);
  });
});
