# Apollo-Server

## What is Apollo?

Apollo is a node.js implementation of GraphQL that does a lot of heavy lifting for us so we can just get the business needs.

## Implementing resolvers

In order for our API to return data we need to implement resolver for our query. A resolver is a function that is responsible for population the data for a single field in your schema.

## Resolver Map

You define all of your server's resolvers in a single JavaScript object named `resolvers` this object is the resolver map. The resolver map has top level fields that corresponds to your schema's type (for example query)  and each resolver function belongs to whichever type its corresponding field belongs to.
