# Apollo-Server

## What is Apollo?

Apollo is a node.js implementation of GraphQL that does a lot of heavy lifting for us so we can just get the business needs.

## Schema Definition Language

The GraphQL specification defines a human-readable schema definition language that you use to define your schema and store it as a string. Here's a short example schema that defines two objects Book and Author: 

```
type Book {
  title: String
  author: Author
}

type Author {
  name: String
  books: [Book]
}

```

## GraphQL Queries

In GraphQL we have both read and write operations. A GraphQL query is used to read or fetch values.

## Object types and fields

The most basic component of a GraphQL schema are object types. Object types represent a kind of object you can fetch from your service, and what fields it has. Here's an example:
```
type Student{
    name: String!
    grade: Int!
    id : ID!
    courses: [Course!]!
}
```

- `Student` is a GraphQL object type which means it's a type with some fields. 
- `name`, `grade`, `id`, `courses` are fields on the `Student` type. That means that these fields can appear in any part of a GraphQL query that operates on a `Student` type.
- `String`, `Int`, `ID` are built in scalar types - these are types that resolve to a single scalar object and can't have sub-sections in the query.
- `!` means that the field is non-nullable, meaning that the GraphQL service promises to always give you a value when you query this field.
- `[Classes!]` represents an array of `Course` objecxts. Since it is also non-nullable, you can always expect an array (with zero or more items) when you query the `courses` field. 

## Implementing resolvers

In order for our API to return data we need to implement resolver for our query. A resolver is a function that is responsible for population the data for a single field in your schema.

## Resolver Map

You define all of your server's resolvers in a single JavaScript object named `resolvers` this object is the resolver map. The resolver map has top level fields that corresponds to your schema's type (for example query)  and each resolver function belongs to whichever type its corresponding field belongs to.

## Default directives:

GraphQL specification defines the following default directives:

`@deprecated(reason: String)`: Marks the schema definition of a field or enum value as deprecated with an optional reason. Deprecated doesn't mean that the field is broken it means it will be going away eventually and gives a warning with a detailed reason you enter in.

`@skip(if: Boolean)`: if true, the decorated field or fragment in an operation is not resolved by the GraphQL server.

`@include(reason: Boolean)`: If false, the decorated fragment in an operation is not resolved by the GraphQL server. 

## Data Sources

Data sources are classes that Apollo Server can use to encapsulate fetching data from a particular source such as a database. You can use any number of different data sources, although not required, data sources are strongly recommended. 

## Filtering Requests

I am utilizing lodash which is a JavaScript library to assist with filtering our data when sending query requests. 

## Fetching REST APIs with GraphQL

In this project we are utilizing `apollo-datasource-rest` package to allow us to make calls to an existing REST API service to fetch speaker data.

## Mutating Data

A GraphQL mutation is used to write or update values to our data. The way you go about mutating data is to add a `Mutation` type to your schema. In our project we have a few different examples of mutations. One which we allow a user to update a favorite flag and another where we allow the user to add a new session to the dataset. Both of these definitions can be found under the schema file under `Mutation` type.

A example of updating data is utilized as a field called 'favorite'. A user can update the `favorite` field of a session using a toggle. You can see this definied in the schema file under the `Session` type.  In our case we added a function under the Mutation type called `toggleFavoriteSession(id: ID): Session`. This calls the resolver to find the `toggleFavoriteSession(id: ID)` method which then calls the datasource to filter the session data by the ID passed in and adjust the toggle to the opposite value of what it is currently and return back the session object with the updated field.

Another example of a mutation we have created in this project is the ability to add a new session object. You can see in the schema file under `Mutation` type we have a function called `addNewSession(session: Session): Session`. This function takes in a `session input` object which we define in our schema file and returns out the new session object the user has added.

An important note is you cannot have a query and mutation task exist in the same tab in the Apollo sandbox. You can nest queries or do mutations but you are unable to do both together.
