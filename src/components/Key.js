import React from 'react';

import styled, {css} from 'styled-components';

function Key({handleKeyClick, theKey}) {
  // console.log(theKey);
  return (
    <KeyDiv finger={theKey.finger} type={theKey.type} onClick={handleKeyClick.bind(null, theKey)}/>
  );
}

export default Key;

const KeyDiv = styled.div`
  height: 50.3px;
  cursor: pointer;

  ${props => props.finger === 'pinky' ? css`
    background-color: var(--pinky);
  ` : props.finger === 'ring' ? css`
    background-color: var(--ring);
  ` : props.finger === 'middle' ? css`
    background-color: var(--middle);
  ` : props.finger === 'rindex' ? css`
    background-color: var(--rindex);
  ` : props.finger === 'lindex' ? css`
    background-color: var(--lindex);
  ` : css`
    background-color: var(--pinky);
  `} 

  ${props => props.type === 'key' ? css`
    width: 50.3px;
  ` : props.type.includes('shift') ? css`
    width: 125.74px;
  ` : props.type === 'enter' ? css`
    width: 104.36px;
  ` : props.type === 'caps' ? css`
    width: 89.27px;
  ` : props.type === 'tab' ? css`
    width: 75.44px;
  ` : css`
    width: 314.35px;
  `
  }

`