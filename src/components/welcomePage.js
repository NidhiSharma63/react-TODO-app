
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
  z-index: 1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GlassEffect = styled.div`
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #d7d7e611;
`;


const Input = styled.input`
  border:none;
  height: 4rem;
  outline: none;
  font-size: 2rem;
  padding-left: 1rem;
  background: transparent;
  color:white;
  border-bottom:.5px solid white;
`
const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function WelcomePage() {
  return (
   <>
     <Container>
        <div style={{marginBottom:'2rem'}}><h1 style={{fontSize:'7rem',letterSpacing:'.5rem'}}>hey! welcome <span style={{fontSize:'4rem'}}>😃</span></h1></div>
        <Col2 >
          <p style={{fontSize:'5rem',marginBottom:'4rem'}}>please enter your name <span style={{fontSize:'3rem'}}>🖊️</span></p>
          <div>
            <Input type="text" name="" id="" placeholder='your name...' />
            <button className='btn' style={{marginLeft:'5rem'}}>submit</button>
          </div>
        </Col2>
      </Container>
      <GlassEffect>
      </GlassEffect>
   </>
  )
}

export default WelcomePage;
