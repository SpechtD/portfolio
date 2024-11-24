package de.davidspecht.portfolio.githubprojects.model;

import java.util.List;

public class RepositoryOwner {
    private List<Repository> repositories;

    public List<Repository> getRepositories() {
        return repositories;
    }

    public void setRepositories(List<Repository> repositories) {
        this.repositories = repositories;
    }
}
