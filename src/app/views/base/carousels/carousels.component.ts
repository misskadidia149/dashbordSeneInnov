import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconDirective } from '@coreui/icons-angular';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, ThemeDirective, CarouselComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent, CarouselIndicatorsComponent, CarouselCaptionComponent, AlignDirective, BorderDirective, TableActiveDirective, TableColorDirective, TableDirective } from '@coreui/angular';

@Component({
    selector: 'app-carousels',
    templateUrl: './carousels.component.html',
    styleUrls: ['./carousels.component.scss'],
    standalone: true,
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective]
  })
export class CarouselsComponent {

  constructor() { }

}
