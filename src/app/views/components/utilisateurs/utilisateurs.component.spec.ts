import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { CardModule, GridModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { iconSubset } from 'src/app/icons/icon-subset';
import { UtilisateursComponent } from './utilisateurs.component';

describe('utilisateursComponent', () => {
  let component: UtilisateursComponent;
  let fixture: ComponentFixture<UtilisateursComponent>;
  let iconSetService: IconSetService

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
      // utilisateursModule,
       NoopAnimationsModule, CardModule, GridModule, IconModule, RouterTestingModule, UtilisateursComponent],
    providers: [IconSetService]
})
    .compileComponents();
  }));

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(UtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
