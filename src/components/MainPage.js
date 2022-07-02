import React,{useEffect} from 'react';
import styled from "styled-components";
import useStore from '../store';
import AddTask from './AddTask';
import RenderTask from './RenderTask';

const Container = styled.div`
  padding: 0rem 2rem;
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
  width: 90%;
  border-radius: .6rem;
  letter-spacing: .2rem;
`
const MainTaskWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: none;
  overflow: hidden;
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TaskWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:100%;
  overflow-y: scroll;
  box-sizing: content-box;
  margin-right: -40px;
`

export default function MainPage() {
  const {
    userName,
    task,
    IsAddedTrue,
    isAddTaskValue,
    isEdit
  } = useStore();

  const HaveNoTask = () => {
      return(
        <Col1 className='common-flex'>
        <h1 style={{fontSize:'3rem',marginBottom:'3rem'}}>you haven't added any task yet</h1>
        <button className='btn1' onClick={()=>IsAddedTrue()}>Add Task</button>
      </Col1>
      );
  };

  return (
    <Container className='common-flex'>
      {
        (!isAddTaskValue)?
        <>
          <H1>what's up, {userName}!</H1>
          <MainTaskWrapper className="">
            <TaskWrapper className="taskWrapper">
            {
              task.length==0?<HaveNoTask/>:<RenderTask/>
            }
            </TaskWrapper>
          </MainTaskWrapper>
          {(task.length!=0 )  && <button className='btn1 btn2' onClick={()=>IsAddedTrue()}>Add Task</button>}
        
        </>
        :
        <AddTask />

      }
    </Container>
  )
}
