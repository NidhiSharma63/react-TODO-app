import './App.css';
import styled from "styled-components";
import WelcomePage from './components/welcomePage';
import MainPage from './components/MainPage';
import useStore from './store';
import { useEffect } from 'react';
import ReactDOM from "react-dom";
import Portal from './components/Portal';


const MainContainer = styled.div`
  position: relative;
  height: 90vh;
`

function App() {
  const name = useStore(state => state.userName);
  // const Portal = useStore(state => state.Portal);
  const loadPrevTask = useStore(state => state.loadPrevTask);
  useEffect(()=>{
    loadPrevTask();
  },[]);
  const show = false;
  return (
      <>
        <MainContainer className='handleWidth'>
        {
          name!==''?<MainPage />:<WelcomePage /> 
        }
        </MainContainer>
        { 
          ReactDOM.createPortal(<Portal />, document.getElementById('portal'))
        }
      </>
  );
}

export default App;
