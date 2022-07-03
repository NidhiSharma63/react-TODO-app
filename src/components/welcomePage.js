
import React, { useEffect } from 'react';
import styled from "styled-components";
import useStore from '../store';

const Container = styled.div`
  width: 90%;
  position: absolute;
  height: 100%;
  z-index: 1;
  color: white;
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
  color:white;
  border-bottom:.5px solid white;
  letter-spacing: .3rem;
`
const H1 = styled.h1`
  font-size: 7rem;
  letter-spacing: .5rem;
`

function WelcomePage() {
  const setUserName = useStore(state => state.setUserName);
  const [name, setName] = React.useState('');

  const handleSubmit= () =>{
    setUserName(name);
    localStorage.setItem('userName', JSON.stringify(name));
  }
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('userName'))!=null){
    setUserName(JSON.parse(localStorage.getItem('userName')));
    }
  }, []);

  return (
   <>
     <Container className='common-flex'>
        <div style={{marginBottom:'2rem'}}><H1>hey! welcome <span style={{fontSize:'4rem'}}>😃</span></H1></div>
        <div className='common-flex'>
          <p style={{fontSize:'5rem',marginBottom:'4rem'}}>please enter your name <span style={{fontSize:'3rem'}}>🖊️</span></p>
          <div>
            <Input 
            type="text" 
            name="" 
            className="input" 
            placeholder='your name...' 
            onChange={(e)=>{setName(e.target.value)}}/>
            <button 
            className='btn1' 
            style={{marginLeft:'5rem'}}
            onClick={handleSubmit}>submit</button>
          </div>
        </div>
      </Container>
      <GlassEffect>
      </GlassEffect>
   </>
  )
}

export default WelcomePage;
