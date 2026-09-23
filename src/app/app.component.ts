import { Component } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [AdminComponent, UserComponent],
})
export class AppComponent {}
