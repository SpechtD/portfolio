import {Injectable} from '@angular/core';
import {Apollo, gql, QueryRef} from 'apollo-angular';

export interface Repo {
  "id": string,
  "name": string,
  "pushedAt": Date,
  "fork": boolean,
  "languages": {
    "nodes": [
      {
        "name": string
      }
    ]
  },
  "primaryLanguage": {
    "name": "Java"
  }
}

export interface ReposResult {
  repositories: {
    nodes: Repo[];
  }
}


@Injectable({
  providedIn: 'root'
})
export class ReposService {
  private reposQuery: QueryRef<{ repositoryOwner: ReposResult }, { login: string }>;

  constructor(private apollo: Apollo) {
    this.reposQuery = this.apollo.watchQuery({
      query: gql`query ($login: String!){
        query {
          repositoryOwner(login: $login){
            repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
              nodes {
                id
                name
                pushedAt
                fork
                languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
                  nodes {
                    name
                  }
                }
                primaryLanguage {
                  name
                }
              }
            }
          }
        }
      }`
    });
  }

  async getRepos(login: string): Promise<Repo[]> {
    const result = await this.reposQuery.refetch({login});
    return result.data.repositoryOwner.repositories.nodes;
  }
}
