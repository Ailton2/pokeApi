import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokeApi';

  loading$ = this.loadingService.loading$;

  constructor(
    public loadingService: LoadingService) {
  }

}
