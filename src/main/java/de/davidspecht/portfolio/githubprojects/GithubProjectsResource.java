package de.davidspecht.portfolio.githubprojects;

import de.davidspecht.portfolio.githubprojects.model.Repository;
import io.smallrye.common.annotation.Blocking;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/api")
public class GithubProjectsResource {

    @Inject
    GithubGraphQlApi graphQlApi;

    @GET
    @Path("/projects")
    @Produces(MediaType.APPLICATION_JSON)
    @Blocking
    public List<Repository> projects() {
        return graphQlApi.repositoryOwner("spechtD", 100).getRepositories();
    }
}
