import React from 'react';
import './App.scss';
import Store from "./state/Store";
import { Container, Row } from 'reactstrap';

// Components
import SearchBar from "./components/SearchBar";
import TweetContainer from "./components/TweetContainer";
import HashtagContainer from "./components/HashtagContainer";

const App = () => {
  return (
    <Store>
      <Container style={{ height: "100%" }}>
        <Row style={{ height: "100%" }}>
          <SearchBar />
          <TweetContainer />
          <HashtagContainer />
        </Row>
      </Container>
    </Store>
  );
};

export default App;