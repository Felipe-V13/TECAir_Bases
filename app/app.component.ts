/* The AppComponent class is a TypeScript class that represents the root component of an Angular
application. */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Web_P1';
}
