import { gql } from "apollo-server-express";

export default gql`
  type Post {
    _id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]
    commentCount: Int!
    goodBoys: [GoodBoy]
    goodBoyCount: Int!
    catKnips: [CatKnip]
    catKnipCount: Int!
  }
  type Comment {
    commentId: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type GoodBoy {
    gbId: ID!
    createdAt: String!
    username: String!
  }
  type CatKnip {
    ckId: ID!
    createdAt: String!
    username: String!
  }
  type User {
    userId: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    goodBoyPost(postId: ID!): Post!
    likePost(postId: ID!): Post!
  }
  type Subscription {
    newPost: Post!
  }
`;
