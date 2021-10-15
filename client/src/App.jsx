import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Footer from "components/Footer/Footer.jsx";
import Header from "components/Header/Header.jsx";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri:
    import.meta.env.NODE_ENV === "development"
      ? "http://localhost:3001/graphql"
      : "https://furbook-backend.herokuapp.com/graphql",

  // InMemoryCache is a class that implements the Cache interface.
  // The cache is used to cache query results.
  cache: new InMemoryCache(),
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container fluid className="wrapper">
          <Header />
          <Container fluid className="innerWrapper">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/me">
              <Profile />
            </Route>
            <Route exact path="/profiles/:username">
              <Profile />
            </Route>
            <Route exact path="/posts/:postId">
              <SinglePost />
            </Route>
          </Container>
          <Footer />
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
