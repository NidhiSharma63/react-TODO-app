import React from 'react';
import styled from "styled-components";

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
  position: relative;
  top: 50%;
  z-index: 1;
  margin: auto;
  width: 387px;
  height: 155px;
  background: white;
 
`

const Div = styled.div`
  height: 100%;
  display:flex;
  text-align: center;
  align-items:center;
  justify-content:center;
  border-radius: .6rem;
  color:#067969;
  flex-direction:column;
`

function Portal() {
  return(
    <>
    <OverLay className='overLay'></OverLay>
    <Container>
      <Div>
        <h1>checked! you have missed Task or Desc</h1><br/>
        <button className='btn1 btn2'>close</button>
      </Div>
    </Container>
    </>
  );
}

export default Portal