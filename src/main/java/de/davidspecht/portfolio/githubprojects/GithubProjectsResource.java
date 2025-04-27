package de.davidspecht.portfolio.githubprojects;

import de.davidspecht.portfolio.githubprojects.model.OrderDirection;
import de.davidspecht.portfolio.githubprojects.model.Repositories;
import de.davidspecht.portfolio.githubprojects.model.RepositoryOrder;
import de.davidspecht.portfolio.githubprojects.model.RepositoryOrderField;
import io.quarkus.cache.CacheResult;
import io.smallrye.common.annotation.Blocking;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/api")
public class GithubProjectsResource {

    @Inject
    GithubGraphQlApi graphQlApi;

    @GET
    @Path("/projects")
    @Produces(MediaType.APPLICATION_JSON)
    @CacheResult(cacheName = "projects-cache")
    @Blocking
    public Repositories projects() {
        return graphQlApi.repositoryOwner("spechtD",
                100,
                new RepositoryOrder(OrderDirection.DESC, RepositoryOrderField.PUSHED_AT),
                3)
                .getRepositories();
    }
}
