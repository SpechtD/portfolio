package de.davidspecht.portfolio.githubprojects.model;

public enum RepositoryOrderField {
  //Order repositories by creation time
    CREATED_AT,

  //Order repositories by name
    NAME,

  //Order repositories by push time
    PUSHED_AT,

  //Order repositories by number of stargazers
    STARGAZERS,

  //Order repositories by update time
    UPDATED_AT
}
