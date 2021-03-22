import React from 'react';
import './App.scss';
import Store from "./state/Store";
import { Container, Row } from 'reactstrap';

// Components
import SearchBar from "./components/SearchBar";
import TweetContainer from "./components/TweetContainer";
import HashtagContainer from "./components/HashtagContainer";
import Error from "./components/Error";

const App = () => {
  return (
    <Store>
      <Container>
        <Row>
          <Error />
          <SearchBar />
          <TweetContainer />
          <HashtagContainer />
        </Row>
      </Container>
    </Store>
  );
};

export default App;