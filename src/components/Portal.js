import React from 'react';
import styled from "styled-components";
import  useStore  from '../store';

const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index:0;
`
const H1 = styled.h1`
  // color:white;
`

const Container = styled.div`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Div = styled.div`
  height: 100%;
  display:flex;
  text-align: center;
  align-items:center;
  justify-content:center;
  color:#067969;
  flex-direction:column;
  width: 400px;
  height: 200px;
  background: white;
  border-radius: 0.6rem;
  padding: 0rem 1rem;
`

function Portal() {
  
  const Portal = useStore(state => state.Portal);
  const setPortal = useStore(state => state.setPortal);
  const handleClick = ()  =>{
    setPortal(false);

  }
  if(!Portal) return null;
  return(
    <>
    <OverLay className='overLay'></OverLay>
    <Container>
     <div className='div'>
      <Div>
          <h1>checked! you have missed Task or Desc</h1><br/>
          <button 
          className='btn1 btn2'
          onClick={handleClick}>close</button>
        </Div>
     </div>
    </Container>
    </>
  );
}

export default Portal