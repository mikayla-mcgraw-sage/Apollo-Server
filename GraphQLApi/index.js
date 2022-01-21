const {ApolloServer, gql} = require('apollo-server');
const SessionAPI = require('./datasources/sessions')

const typeDefs = gql`
type Query{
sessions:[Session]
}
type Session {
id: ID!
title: String!,
description: String,
startsAt: String,
endsAt: String,
room: String,
day: String,
format: String,
track: String @deprecated(reason: "Too many sessions do not fit into a single track, we will be migrating to a tags based system in the future."),
level: String
}`


const dataSources = () => ({
    sessionAPI: new SessionAPI()
});

const resolvers ={
    Query: {
        sessions:(parent, args, { dataSources }, info) => {
            return dataSources.sessionAPI.getSessions();
        }
    }
};

const server = new ApolloServer({typeDefs, resolvers, dataSources});

server
    .listen({port: process.env.PORT || 4000})
    .then(({url}) =>{
        console.log(`graphQL running at ${url}`);
    })