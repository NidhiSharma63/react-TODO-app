import React from 'react';
import useStore from '../store';
import styled from "styled-components";
import {AiOutlineDelete} from 'react-icons/ai';
import {AiOutlineEdit} from 'react-icons/ai';
import {FcAlarmClock} from 'react-icons/fc';


const Task = styled.div`
  border: 1px solid;
  padding: 1rem 2rem;
  background: #067969;
  color: white;
  border-radius: 1rem;
  font-size: 1.5rem;
  width:auto;
  margin:.6em;
  height: 15rem;
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

function RenderTask() {
  const { 
    task, 
    deleteTask,
    editTaskFun,
    IsAddedTrue} = useStore();

  const handleEdit = (item) =>{
    editTaskFun(item);
    IsAddedTrue();
  }

  return (
    <>
      {
        task.map((item,index)=>{
        return(
          <Task key={index} className="task">
            <Title className="title">
              <h1>{item.title}</h1> 
              <div>
                <Span onClick={()=>deleteTask(item.id)}><AiOutlineDelete/></Span>
                <Span2 onClick={() =>handleEdit(item)}><AiOutlineEdit/></Span2>
              </div>
            </Title>
            <p style={{marginTop:'2rem'}}>{item.Desc}</p>
            <p style={{marginTop:'2rem'}}><span style={{marginTop:'1rem',fontSize:'2rem'}}><FcAlarmClock/></span>{item.date}</p>
          </Task>
       )
      })
    }
    </>
  )
}

export default RenderTask;