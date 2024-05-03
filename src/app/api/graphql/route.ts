import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { nanoid } from 'nanoid';

type Todo = {
  id: string;
  name: string;
  checked?: boolean;
};

const todoList: Todo[]= [
  {
    id: "h1uMV2vGlYF_U-J3RtRAs",
    name: "wake up",
    checked: false,
},
{
    id: "qTps2NpP5-6oqSOIpvj7M",
    name: "Check mails",
    checked: false,
}
];

const resolvers = {
  Query: {
    getTodoList: () => todoList,
  },
};

const typeDefs = gql`
 type Todo {
  id: ID!
  name: String!
  checked: Boolean
}
  type Query {
    getTodoList: [Todo!]!
    getTodoByid(id: ID!): Todo
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };