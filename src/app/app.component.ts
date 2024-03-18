import { Component, inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Connection with backend not working';
  apiHost = environment.apiHost;
  private httpClient = inject(HttpClient);
  
  ngOnInit(): void {
    this.httpClient.get<string>(
      this.apiHost + '/messages',
      {
        responseType: 'text' as 'json',
      }
    ).pipe(
      tap((message) => {
        this.title = message;
      })
    ).subscribe();
  }

}
