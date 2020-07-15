import React, { Component } from 'react';
import styled from 'styled-components';

class Display extends Component {
  render() {
    let {active, gameOn} = this.props.info.active.name;
    // let conditionalClass = gameOn ? 'gameOn' : 'gameOff';
    // let finalClasses = ['stats', conditionalClass].join(' ');
    return (
      <DisplayDiv>
        <div className="task">
          {gameOn ? <h1 className='title'>На каком месте находиться клавиша:</h1> : <h1 className='title'>Нажмите Start для начала</h1>}
          <div className="current-key">
            <img src="/imgs/wolf.svg" alt="wolf"/>
              {gameOn ? <h1 className="active-key">{active}</h1> : <button className="start-btn"><h3>Start</h3></button>}
            <img src="/imgs/wolf.svg" alt="wolf"/>
          </div>
        </div>
        <div className="line"></div>
        <div className='stats'>
          <h3>Показно клавиш:  7</h3>
          <h3 className={gameOn && 'gameOn-left'}>Верных ответов: 5</h3>
          <h3 className={gameOn && 'gameOn-right'}>Ошибок : 0</h3>
        </div>
      </DisplayDiv>
    );
  }
}

export default Display;

const DisplayDiv = styled.div`
  width: 1020px;
  height: 367px; 
  background: rgba(47, 46, 45, 0.8);
  border-radius: 46px;
  padding: 24px 33px;
  position: relative;

  h1{
    margin: 0;
    margin-bottom: 34px;
  }

  .task{
    display: flex;
    align-items: center; 
    flex-direction: column;

    .title{
      text-align: center; 
    }

    .current-key{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 270px;

      img:first-child{
        transform: rotateY(180deg);
      }
    }

    .start-btn{
      cursor: pointer;
      background: var(--violet);
      border: 1px solid #D6C8BB;
      box-sizing: border-box;
      border-radius: 5px;
      color: white;
      padding: 0.4rem 0.8rem;

      &:hover{
        border: 1px solid white;
      }
    }
  }

  .line{
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    height: 4px; 
    background: #015D90;
  }

  .stats{
    margin-top: 60px;
    position: relative; 
  }

  .stats h3{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all .5s linear;
  }

  .stats h3:first-child{
    color: var(--middle);
  }

  .stats h3:nth-child(2){
    top: 40px;
    color: var(--rindex);
  }

  .stats h3:nth-child(3){
    top: 80px;
    color: var(--pinky);
  }
`