import './App.css';
import styled from "styled-components";
import WelcomePage from './components/welcomePage';
import MainPage from './components/MainPage';
import useStore from './store';
import { BrowserRouter as Router,Routes, Route, NavLink, Link } from 'react-router-dom'
import { useEffect } from 'react';
import ReactDOM from "react-dom";
import Portal from './components/Portal';


// change the min width to max width
const MainContainer = styled.div`
  position: relative;
  height: 90vh;
`
function App() {
  const name = useStore(state => state.userName);
  const loadPrevTask = useStore(state => state.loadPrevTask);
  useEffect(()=>{
    loadPrevTask();
  },[])
  return (
      <Router>
        <MainContainer className='handleWidth'>
        {
          name!==''?<MainPage />:<WelcomePage /> 
        }
        </MainContainer>
        
     {
       ReactDOM.createPortal(<Portal />, document.getElementById('portal'))
     }
      </Router>
  );
}

export default App;
