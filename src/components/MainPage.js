import React from 'react';
import styled from "styled-components";
import useStore from '../store';

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 1rem;
`

export default function MainPage() {
  const name = useStore(state => state.userName);
  return (
    <Container>
      <h1 style={{color:'#067969',fontSize:'3rem'}}>what's up {name}</h1>
    </Container>
  )
}
