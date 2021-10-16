import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
        treatCount
        treats {
          treatAuthor
          createdAt
        }
        postImage {
          imageId
          format
          version
        }
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      postText
      postAuthor
      createdAt
      postImage {
        imageId
        format
        version
      }
      commentCount
      comments {
        commentAuthor
        createdAt
        commentText
      }
      treats {
        treatAuthor
        createdAt
      }
      treatCount
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        commentText
        commentAuthor
        createdAt
      }
      postImage {
        imageId
        format
        version
      }
      commentCount
      treatCount
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        postAuthor
        createdAt
        postImage {
          imageId
          format
          version
        }
        treats {
          treatAuthor
          createdAt
        }
        comments {
          commentText
          commentAuthor
          createdAt
        }
        commentCount
        treatCount
      }
    }
  }
`;
