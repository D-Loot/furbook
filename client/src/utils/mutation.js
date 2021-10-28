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
        commentAuthor
        createdAt
      }
      postImage {
        _id
        imageId
        format
        version
      }
      commentCount
      treats {
        _id
        treatAuthor
        createdAt
      }
      treatCount
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
        commentAuthor
        createdAt
      }
      commentCount
      treats {
        _id
        treatAuthor
        createdAt
      }
      treatCount
    }
  }
`;

export const TREAT_POST = gql`
  mutation treatPost($postId: ID!) {
    treatPost(postId: $postId) {
      treats {
        _id
        createdAt
        treatAuthor
      }
      treatCount
    }
  }
`;
