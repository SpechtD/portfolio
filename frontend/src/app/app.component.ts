import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProjectsListComponent} from './projects-list/projects-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DavidSpecht.de';
}
