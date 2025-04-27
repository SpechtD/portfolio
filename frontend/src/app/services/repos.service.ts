import {Injectable} from '@angular/core';
import {Apollo, gql, QueryRef} from 'apollo-angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Repo {
  "id": string,
  "name": string,
  "pushedAt": string,
  "fork": boolean,
  "url": string,
  "languages": {
    "nodes": [
      {
        "name": string
        "color": string
      }
    ]
  },
  "primaryLanguage": {
    "name": "Java"
    "color": string
  }
}

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  constructor(private http: HttpClient) {
  }
  getRepos(): Observable<{nodes: Repo[]}> {
    return this.http.get<{nodes: Repo[]}>("api/projects");
  }
}
