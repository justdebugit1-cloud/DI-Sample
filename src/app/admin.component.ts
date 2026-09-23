import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  constructor( private counterService: CounterService ) {}

  getServiceId(): number {
    return this.counterService.id;
  }
}
