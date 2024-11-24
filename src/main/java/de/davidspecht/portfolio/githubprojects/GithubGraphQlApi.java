package de.davidspecht.portfolio.githubprojects;

import de.davidspecht.portfolio.githubprojects.model.Repository;
import de.davidspecht.portfolio.githubprojects.model.RepositoryOwner;
import io.smallrye.graphql.client.typesafe.api.GraphQLClientApi;
import io.smallrye.graphql.client.typesafe.api.NestedParameter;

@GraphQLClientApi(configKey = "github")
public interface GithubGraphQlApi {
    RepositoryOwner repositoryOwner(String login, @NestedParameter("repository") int first);
}
