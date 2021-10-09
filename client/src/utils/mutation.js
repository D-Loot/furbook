import { gql } from "@apollo/client";

// WORK IN PROGRESS -- NEED TO MATCH UP WITH UPDATED SCHEMA

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($body: String!) {
    addPost(body: $body) {
      _id
      image
      body
      username
      createdAt
      comments {
        _id
        body
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($_id: ID!, $body: String!) {
    addComment(id: $_id, body: $body) {
      _id
      body
      username
      createdAt
      comments {
        _id
        body
        createdAt
      }
    }
  }
`;
// Todo: Fix according to new schema
export const ADD_TREAT = gql`
  mutation addTreat($_id: ID!, $postId: ID!) {
    addTreat(id: $_id, postId: $postId) {
      _id
      username
      createdAt
      post {
        postId
        username
        createdAt
        treatCount
      }
    }
  }
`;
