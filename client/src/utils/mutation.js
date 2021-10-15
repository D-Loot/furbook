import { gql } from "@apollo/client";

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
  mutation addPost($postImage: InputImage!, $postText: String!) {
    addPost(postImage: $postImage, postText: $postText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
      }
      postImage {
        imageId
        format
        version
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const ADD_TREAT = gql`
  mutation addTreat($postId: ID!) {
    addTreat(postId: $postId) {
      postId
      treats {
        _id
        createdAt
        treatAuthor
      }
      treatCount
    }
  }
`;
