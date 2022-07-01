import './App.css';
import React from 'react';
import styled from "styled-components";
import WelcomePage from './components/welcomePage';
import MainPage from './components/MainPage';
import useStore from './store';
import { BrowserRouter as Router,Routes, Route, NavLink, Link } from 'react-router-dom'


// change the min width to max width
const MainContainer = styled.div`
  min-width: 1440px;
  position: relative;
  height: 90vh;
`

function App() {
  const name = useStore(state => state.userName);
  return (
    <Router>
      <MainContainer>
        <MainPage />
        {/* {
          name!==''?<MainPage />:<WelcomePage /> 
        } */}
      </MainContainer>

      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/mainpage' element={<MainPage />}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </Router>
      
  );
}

export default App;
