import React from 'react';
import { Link, } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const NoMatch = () => (
  <>
    <Header as="h3" textAlign="center">
      Page not found return
    <Link to="/"> Home</Link>
    </Header>
    <div>
      <center>
        <img alt="" src="https://media2.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif" />
      </center>
    </div>
  </>
)

export default NoMatch;