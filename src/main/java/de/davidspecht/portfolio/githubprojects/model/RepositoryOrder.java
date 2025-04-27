package de.davidspecht.portfolio.githubprojects.model;

import org.eclipse.microprofile.graphql.Input;

@Input("RepositoryOrder")
public class RepositoryOrder {
    private OrderDirection direction;
    private RepositoryOrderField field;

    public RepositoryOrder(OrderDirection direction, RepositoryOrderField field) {
        this.direction = direction;
        this.field = field;
    }
    public OrderDirection getDirection() {
        return direction;
    }

    public void setDirection(OrderDirection direction) {
        this.direction = direction;
    }

    public RepositoryOrderField getField() {
        return field;
    }

    public void setField(RepositoryOrderField field) {
        this.field = field;
    }
}
