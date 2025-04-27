import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import {TitleComponent} from './title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectsListComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DavidSpecht.de';
}
