import React from 'react';
import Display from './components/Display';
import Keyboard from './components/Keyboard';

import 'normalize.css';
import styled from 'styled-components';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      rows: [
        [
          {name: 'tab', type: 'tab', shown: false, finger: 'pinky'},
          {name: 'й', type: 'key', shown: false, finger: 'pinky'},
          {name: 'ц', type: 'key', shown: false, finger: 'ring'},
          {name: 'у', type: 'key', shown: false, finger: 'middle'},
          {name: 'к', type: 'key', shown: false, finger: 'lindex'},
          {name: 'е', type: 'key', shown: false, finger: 'lindex'},
          {name: 'н', type: 'key', shown: false, finger: 'rindex'},
          {name: 'г', type: 'key', shown: false, finger: 'rindex'},
          {name: 'ш', type: 'key', shown: false, finger: 'middle'},
          {name: 'щ', type: 'key', shown: false, finger: 'ring'},
          {name: 'з', type: 'key', shown: false, finger: 'pinky'},
          {name: 'х', type: 'key', shown: false, finger: 'pinky'},
          {name: 'ъ', type: 'key', shown: false, finger: 'pinky'},
          {name: 'slash', type: 'key', shown: false, finger: 'pinky'},
        ], 
        [
          {name: 'caps', type: 'caps', shown: false, finger: 'pinky'},
          {name: 'ф', type: 'key', shown: false, finger: 'pinky'},
          {name: 'ы', type: 'key', shown: false, finger: 'ring'},
          {name: 'в', type: 'key', shown: false, finger: 'middle'},
          {name: 'а', type: 'key', shown: false, finger: 'lindex'},
          {name: 'п', type: 'key', shown: false, finger: 'lindex'},
          {name: 'р', type: 'key', shown: false, finger: 'rindex'},
          {name: 'о', type: 'key', shown: false, finger: 'rindex'},
          {name: 'л', type: 'key', shown: false, finger: 'middle'},
          {name: 'д', type: 'key', shown: false, finger: 'ring'},
          {name: 'ж', type: 'key', shown: false, finger: 'pinky'},
          {name: 'э', type: 'key', shown: false, finger: 'pinky'},
          {name: 'enter', type: 'enter', shown: false, finger: 'pinky'},
        ], 
        [
          {name: 'lshift', type: 'shift', shown: false, finger: 'pinky'},
          {name: 'я', type: 'key', shown: false, finger: 'pinky'},
          {name: 'ч', type: 'key', shown: false, finger: 'ring'},
          {name: 'с', type: 'key', shown: false, finger: 'middle'},
          {name: 'м', type: 'key', shown: false, finger: 'lindex'},
          {name: 'и', type: 'key', shown: false, finger: 'lindex'},
          {name: 'т', type: 'key', shown: false, finger: 'rindex'},
          {name: 'ь', type: 'key', shown: false, finger: 'rindex'},
          {name: 'б', type: 'key', shown: false, finger: 'middle'},
          {name: 'ю', type: 'key', shown: false, finger: 'ring'},
          {name: 'dot', type: 'key', shown: false, finger: 'pinky'},
          {name: 'rshift', type: 'shift', shown: false, finger: 'pinky'},
        ], 
        [
          {name: 'space', type: 'space', shown: false, finger: 'thumb'},
        ]
      ], 
      active: {name: 'ь', type: 'key', shown: false, finger: 'rindex'},
      gameOn: false,
      totalAnswers: 0, 
      correctAnswers: 0,
      wrongAnswers: 0
    };
    this.handleKeyClick = this.handleKeyClick.bind(this);
  }

  // generateNewActive(){}

  // handleStart(){}

  handleKeyClick(key, e){
    console.log('Key was clicked!');
    console.log(key, e);
  }

  render(){
    return (
      <AppMain className="App">
        <div className="container">
          <Display info={this.state}/>
          <Keyboard info={{...this.state, handleKeyClick:this.handleKeyClick}}/>
        </div>
      </AppMain>
    );
  }
}

export default App;


const AppMain = styled.main`
  display: flex;
  align-items: center; 

  .container{
    margin: 0 auto;
    width: 1020px;
    height: 781px;  
    display: flex; 
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;
  }
`