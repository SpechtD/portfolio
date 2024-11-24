import {Component, Input} from '@angular/core';
import {Repo} from '../services/repos.service';

@Component({
  selector: 'app-project-list-item',
  standalone: true,
  imports: [],
  templateUrl: './project-list-item.component.html',
  styleUrl: './project-list-item.component.css'
})
export class ProjectListItemComponent {
  @Input({required: true}) repo!: Repo;

  protected getYear(date: string) {
    return new Date(date).getFullYear();
  }
}

