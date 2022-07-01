import React,{useRef,useState} from 'react';
import styled from "styled-components";
import useStore from '../store';
import AddTask from './AddTask';
import {AiOutlineDelete} from 'react-icons/ai';
import {AiOutlineEdit} from 'react-icons/ai';

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
  width: 90%;
  border-radius: .6rem;
  letter-spacing: .2rem;
`
const Task = styled.div`
  border: 1px solid;
  padding: 1rem 2rem;
  background: #067969;
  color: white;
  border-radius: 1rem;
  font-size: 1.5rem;
  width: 80%;
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
`
const Span = styled.span`
  font-size: 2.3rem;
  margin-left: 8rem;
  margin-right: 1.2rem;
  cursor: pointer;
`
const Span2 = styled.span`
  font-size: 2.3rem;
  cursor: pointer;
`
const MainTaskWrapper = styled.div`
  height: 100%;
  overflow-y: none;
  overflow: hidden;
  padding: 1rem 0rem;
`

const TaskWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: content-box;
  padding-right: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export default function MainPage() {
  const {
    userName,
    task,
    IsAddedTrue,
    isAddTaskValue,
    deleteTask,
    editTaskFun,
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

  const handleEdit = (item) =>{
    editTaskFun(item);
    IsAddedTrue();
  }

  return (
    <Container className='common-flex'>
      {
        (!isAddTaskValue)?
        <>
        <H1>what's up, {userName}!</H1>
        <MainTaskWrapper className="">
          <TaskWrapper className="tasks">
          {
            task.length==0?<HaveNoTask/>:
            task.map((item,index)=>{
              return(
                <Task key={index}>
                  <Title className="title">
                    <h1>{item.title}</h1> 
                    <div>
                      <Span onClick={()=>deleteTask(item.id)}><AiOutlineDelete/></Span>
                      <Span2 onClick={() =>handleEdit(item)}><AiOutlineEdit/></Span2>
                    </div>
                  </Title>
                  <p style={{marginTop:'2rem'}}>{item.Desc}</p>
                  <p style={{marginTop:'2rem'}}>{item.Date}</p>
                </Task>
            )
          })
        }
          </TaskWrapper>
        </MainTaskWrapper>
        {(task.length!=0 )  && <button className='btn1 btn2' onClick={()=>IsAddedTrue()}>Add Task</button>}
        
        </>
        :
        <AddTask />

      }

      {/* {isEdit && <AddTask />} */}
      

    </Container>
  )
}
