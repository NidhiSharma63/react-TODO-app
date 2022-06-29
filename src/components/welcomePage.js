
import React from 'react';
import styled from "styled-components";
import useStore from '../store';

const Container = styled.div`
  width: 90%;
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
  font-size: 2.5rem;
  padding-left: .5rem;
  background: transparent;
  color:white;
  border-bottom:.5px solid white;
  letter-spacing: .3rem;
`
const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const H1 = styled.h1`
  font-size: 7rem;
  letter-spacing: .5rem;
`

function WelcomePage() {
  const setUserName = useStore(state => state.setUserName);
  const [name, setName] = React.useState('');

  return (
   <>
     <Container>
        <div style={{marginBottom:'2rem'}}><H1>hey! welcome <span style={{fontSize:'4rem'}}>😃</span></H1></div>
        <Col2 >
          <p style={{fontSize:'5rem',marginBottom:'4rem'}}>please enter your name <span style={{fontSize:'3rem'}}>🖊️</span></p>
          <div>
            <Input 
            type="text" 
            name="" id="" 
            placeholder='your name...' 
            onChange={(e)=>{setName(e.target.value)}}/>
            <button 
            className='btn' 
            style={{marginLeft:'5rem'}}
            onClick={()=>setUserName(name)}>submit</button>
          </div>
        </Col2>
      </Container>
      <GlassEffect>
      </GlassEffect>
   </>
  )
}

export default WelcomePage;
