import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  constructor(private counterService: CounterService) {}

  getServiceId(): number {
    return this.counterService.id;
  }

}