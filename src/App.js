import './App.css';
import styled from "styled-components";
import WelcomePage from './components/welcomePage';
import MainPage from './components/MainPage';
import useStore from './store';

// change the min width to max width
const MainContainer = styled.div`
  min-width: 1440px;
  position: relative;
  height: 90vh;
`

function App() {
  const name = useStore(state => state.userName);
  console.log(name);
  return (
      <MainContainer>
        {
          name!==''?<MainPage />:<WelcomePage /> 
        }
        </MainContainer>
  );
}

export default App;
