import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Logger } from './@shared';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KingoDisco-Frontend';

  ngOnInit(): void {
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');
  }
}
