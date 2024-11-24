import {Component, Injectable, OnInit} from '@angular/core';
import {ProjectListItemComponent} from '../project-list-item/project-list-item.component';
import {HttpClient} from '@angular/common/http';
import {Repo, ReposService} from '../services/repos.service';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    ProjectListItemComponent
  ],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})

@Injectable({providedIn: 'root'})
export class ProjectsListComponent implements OnInit {
  repos: Repo[] | null = null;

  constructor(private reposService: ReposService) {
  }

  async ngOnInit() {
    this.repos = await this.reposService.getRepos('SpechtD');
  }
}
