import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Import RouterModule for navigation
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngStyle and other common directives
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  CardComponent,
  CardBodyComponent,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective,
  TextColorDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Ensure CommonModule is imported here
    FormsModule,
    RouterModule, // Ensure RouterModule is imported here
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    TextColorDirective,
  ],
})
export class LoginComponent {
  // Form data model
  form = {
    username: '',
    password: '',
  };

  // Inject Router service for navigation
  constructor(private router: Router) {}

  // Form submission handler
  onSubmit() {
    // Example validation logic
    const isAuthenticated =
      this.form.username === 'admin' && this.form.password === 'admin';

    if (isAuthenticated) {
      // Navigate to the dashboard on successful login
      this.router.navigate(['/dashboard']); // Update this route as needed
    } else {
      // Handle authentication failure
      console.error('Authentication failed - check username and password');
      alert('Authentication failed, please try again!');
    }
  }
}
