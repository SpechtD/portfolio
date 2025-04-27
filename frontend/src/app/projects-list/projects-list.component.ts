import {Component, Injectable, OnInit} from '@angular/core';
import {ProjectListItemComponent} from '../project-list-item/project-list-item.component';
import {HttpClient} from '@angular/common/http';
import {Repo, ReposService} from '../services/repos.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    ProjectListItemComponent,
    AsyncPipe
  ],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})

@Injectable({providedIn: 'root'})
export class ProjectsListComponent implements OnInit {
  repos$!: Observable<{ nodes: Repo[] }>;

  constructor(private reposService: ReposService) {
  }

  async ngOnInit() {
    this.repos$ = this.reposService.getRepos();
    console.log(this.repos$);
  }
}
