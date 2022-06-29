
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
  width: 25rem;
  border-radius:.4rem;
  outline: none;
  font-size: 2rem;
  padding: .5rem;
`

function WelcomePage() {
  return (
   <>
     <Container>
        <div style={{marginBottom:'2rem'}}><h1 style={{fontSize:'7rem',letterSpacing:'.5rem'}}>hey! welcome <span style={{fontSize:'4rem'}}>😃</span></h1></div>
        <div >
          <p style={{fontSize:'5rem',marginBottom:'2rem'}}>please enter your name <span style={{fontSize:'3rem'}}>🖊️</span></p>
          <Input type="text" name="" id="" placeholder='your name...' />
          <button className='btn'>submit</button>
        </div>
      </Container>
      <GlassEffect>
      </GlassEffect>
   </>
  )
}

export default WelcomePage;
