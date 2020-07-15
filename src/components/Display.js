import React, { Component } from 'react';
import styled from 'styled-components';

class Display extends Component {
  render() {
    return (
      <DisplayDiv>
        Hello From Display
      </DisplayDiv>
    );
  }
}

export default Display;

const DisplayDiv = styled.div`
  width: 1020px;
  height: 367px; 
  border: 2px solid red; 
`