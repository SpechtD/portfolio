package de.davidspecht.portfolio.githubprojects;

import de.davidspecht.portfolio.githubprojects.model.Repository;
import de.davidspecht.portfolio.githubprojects.model.RepositoryOwner;
import io.smallrye.graphql.client.typesafe.api.GraphQLClientApi;
import io.smallrye.graphql.client.typesafe.api.NestedParameter;
import org.eclipse.microprofile.graphql.Name;
import org.eclipse.microprofile.graphql.NonNull;

@GraphQLClientApi(configKey = "github")
public interface GithubGraphQlApi {
    RepositoryOwner repositoryOwner(@NonNull String login, @NestedParameter("repositories") @Name("first") int firstRepos, @NestedParameter("repositories.nodes.languages") @Name("first") int firstLangs);
}
