import React from 'react';
import styled, {keyframes} from 'styled-components'

const LoadingioSpinner = styled.div`
    position: fixed;
    left: 550px;
    top: 280px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    background-color: rgba(255, 156, 0, .01);
    border-radius: 50%;
`

const rotate = keyframes`
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
`;
const Ldio = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
    div {
          position: absolute;
          border-width: 4px;
          border-style: solid;
          opacity: 1;
          border-radius: 50%;
          animation: ${rotate} 1s cubic-bezier(0,0.2,0.8,1) infinite;
        &:nth-child(1){
            border-color: #e90c59
        }
        &:nth-child(2) {
          border-color: #46dff0;
          animation-delay: -0.5s;
        }
    }
`

const GobalLoading = () => {

  return (
    <LoadingioSpinner>
      <Ldio>
        <div></div>
        <div></div>
      </Ldio>
    </LoadingioSpinner>
  );
};

export default GobalLoading;
