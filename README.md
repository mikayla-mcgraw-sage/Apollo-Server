# Apollo-Server

## What is Apollo?

Apollo is a node.js implementation of GraphQL that does a lot of heavy lifting for us so we can just get the business needs.

## Implementing resolvers

In order for our API to return data we need to implement resolver for our query. A resolver is a function that is responsible for population the data for a single field in your schema.

## Resolver Map

You define all of your server's resolvers in a single JavaScript object named `resolvers` this object is the resolver map. The resolver map has top level fields that corresponds to your schema's type (for example query)  and each resolver function belongs to whichever type its corresponding field belongs to.

## Default directives:

GraphQL specification defines the following default directives:

- `@deprecated(reason: String)`: Marks the schema definition of a field or enum value as deprecated with an optional reason. Deprecated doesn't mean that the field is broken it means it will be going away eventually and gives a warning with a detailed reason you enter in.

- `@skip(if: Boolean)`: if true, the decorated field or fragment in an operation is not resolved by the GraphQL server.

- `@include(reason: Boolean)`: If false, the decorated fragment in an operation is not resolved by the GraphQL server. 

## Data Sources

Data sources are classes that Apollo Server can use to encapsulate fetching data from a particular source such as a database. You can use any number of different data sources, although not required, data sources are strongly recommended. 

## Filtering Requests

I am utilizing lodash which is a JavaScript library to assist with filtering our data when sending query requests. 