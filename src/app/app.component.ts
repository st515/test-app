import { Component } from '@angular/core';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  point: number;

  constructor(private counterService: CounterService) {
    this.point = counterService.point.getValue();
    // CounterServiceのpoint変更通知を購読する
    counterService.point.subscribe((v) => this.point = v);
  }

  increment() {
    this.counterService.increment(3);
  }

  decrement() {
    this.counterService.decrement(2);
  }
}
