import React from 'react';
import styled from "styled-components";
import useStore from '../store';
import AddTask from './AddTask';


const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: white;
  padding: 1rem;
  border-radius: .6rem;
  height: 100%;
  justify-content: space-between;
`;
const H1 = styled.h1`
  color: #067969;
  font-size:3.5rem;
  align-self: flex-start;
  justify-self: flex-start;
`
const Col1 = styled.div`
  background-color: #067969;
  color: white;
  padding:3rem;
  width: 80%;
  border-radius: .6rem;
  letter-spacing: .2rem;
`

export default function MainPage() {
  const name = useStore(state => state.userName);
  const task = useStore(state => state.task);
  const isAddedTrue = useStore(state => state.IsAddedTrue);
  const isAddeValue = useStore(state => state.isAddeValue);
  console.log(isAddeValue);
  const HaveNoTask = () => {
      return(
        <Col1 className='common-flex'>
        <h1 style={{fontSize:'3rem',marginBottom:'3rem'}}>you haven't added any task yet</h1>
        <button className='btn' onClick={()=>isAddedTrue()}>Add Task</button>
      </Col1>
      )
  }

  return (
    <Container className='common-flex'>
      {
        !isAddeValue?
        <>
        <H1>what's up, {name}!</H1>
        {
          task.length==0?<HaveNoTask/>:
          task.map((item,index)=>{
            // console.log('item',item);
          })
        }
        <div></div>
        </>
        :
        <AddTask />

      }
      

    </Container>
  )
}
