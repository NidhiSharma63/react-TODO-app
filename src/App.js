import './App.css';
import styled from "styled-components";
import WelcomePage from './components/welcomePage';

// change the min width to max width
const MainContainer = styled.div`
  
  min-width: 1440px;
  position: relative;
  height: 90vh;
  // margin: auto;
`

function App() {
  return (
    <div className="App">
      <MainContainer className="main-container">
        <WelcomePage />
      </MainContainer>

    </div>
  );
}

export default App;
