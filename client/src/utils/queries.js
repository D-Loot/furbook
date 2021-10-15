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
          _id
          treatAuthor
          createdAt
        }
        postImage {
          _id
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
        _id
        imageId
        format
        version
      }
      commentCount
      comments {
        _id
        commentAuthor
        createdAt
        commentText
      }
      treats {
        _id
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
          _id
          imageId
          format
          version
        }
        treats {
          _id
          treatAuthor
          createdAt
        }
        comments {
          _id
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
