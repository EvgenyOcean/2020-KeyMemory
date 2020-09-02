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
          {name: '/', type: 'key', shown: false, finger: 'pinky'},
        ], 
        [
          {name: 'CapsLock', type: 'caps', shown: false, finger: 'pinky'},
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
          {name: 'Enter', type: 'enter', shown: false, finger: 'pinky'},
        ], 
        [
          {name: 'Left Shift', type: 'shift', shown: false, finger: 'pinky'},
          {name: 'я', type: 'key', shown: false, finger: 'pinky'},
          {name: 'ч', type: 'key', shown: false, finger: 'ring'},
          {name: 'с', type: 'key', shown: false, finger: 'middle'},
          {name: 'м', type: 'key', shown: false, finger: 'lindex'},
          {name: 'и', type: 'key', shown: false, finger: 'lindex'},
          {name: 'т', type: 'key', shown: false, finger: 'rindex'},
          {name: 'ь', type: 'key', shown: false, finger: 'rindex'},
          {name: 'б', type: 'key', shown: false, finger: 'middle'},
          {name: 'ю', type: 'key', shown: false, finger: 'ring'},
          {name: '.', type: 'key', shown: false, finger: 'pinky'},
          {name: 'Right Shift', type: 'shift', shown: false, finger: 'pinky'},
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
    this.handleStart = this.handleStart.bind(this);
    this.generateNewActive = this.generateNewActive.bind(this);
  }

  generateNewActive(){
    // this.state.rows[this.state.rows.length][]
    let rows = this.state.rows;
    let rowIndex = Math.floor(Math.random()*4);
    let keyIndex = Math.floor(Math.random()*rows[rowIndex].length);
    this.setState({active: rows[rowIndex][keyIndex]});
  }

  handleStart(){
    this.setState({gameOn: true}, () => {
      this.generateNewActive();
    })
  }

  handleKeyClick(key, e){
    console.log(key);
    let active = this.state.active;
    if (key === active){
      this.setState(prevState => {
        return {totalAnswers: prevState.totalAnswers + 1, correctAnswers: prevState.correctAnswers + 1}
      }, () => {this.generateNewActive();})
    } else {
      this.setState(prevState => ({wrongAnswers: prevState.wrongAnswers + 1}))
    }
  }

  render(){
    return (
      <AppMain className="App">
        <div className="container">
          <Display info={{...this.state, handleStart: this.handleStart}}/>
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