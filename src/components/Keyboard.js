import React, { Component } from 'react';
import styled from 'styled-components';

import Key from './Key';

class Keyboard extends Component {
  render(){
    let {rows, handleKeyClick} = this.props.info;
    let content = [];
    rows.forEach((row, index) => {
      let allTds = [];
      for (let key of row){
        allTds.push(<Key key={key.name} handleKeyClick={handleKeyClick} theKey={key} />)
      }

      content.push(<div className={row[0].type === 'space' ? 'row space-row' : 'row'} key={index}>{allTds}</div>)
    })

    return (
      <KeyboardDiv>        
        {content}
      </KeyboardDiv>
    );
  }
}

export default Keyboard;

const KeyboardDiv = styled.div`
  width: 973.22px;
  height: 298px; 
  background: rgba(119, 0, 88, 0.9);
  border-radius: 26px;
  padding: 29px 38px;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;

  .row{
    display: flex; 
    justify-content: space-between;
  }

  .space-row{
    justify-content: center;
  }
`