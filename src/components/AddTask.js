import React, {useState} from 'react';
import styled from 'styled-components';
import useStore from '../store';
import { v4 as uuidv4 } from 'uuid';

const FromDiv = styled.div`
  display: flex;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Lable = styled.label`
  font-size: 2.3rem;
  margin: 2rem 1rem 2rem 0rem;
  font-weight: 400;
  background-color: #067969;
  padding: 1rem;
  color: white;
  border-radius: .6rem;
`;
const Input = styled.input`
  color:#067969;
  border-bottom:.5px solid #067969;
  letter-spacing: .3rem;
`;
const Textarea = styled.textarea`
  background: #f2f7f7;
  overflow: hidden;
  font-size: 2rem;
  resize: none;
  color:#067969;
  border-radius: .6rem;
`;
const Button = styled.button`
  font-size: 2.3rem;
  background-color: #067969;
  margin-left: 0rem;
  margin-top: 2rem;
`;

function AddTask() {
  const {IsAddedFalse, EditTask, setTask,isEdit,EditFalse,ClearEditArray} = useStore();
  const [title,setTitle] = useState('');
  const [Desc,setDesc] = useState('');
  const [Date,setDate] = useState('');


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(title && Desc){
      IsAddedFalse();
      setTask({title,Desc,Date,id:uuidv4()});
      ClearEditArray();
    }
  }

  const handleChangeInput = (e) => {
    setTitle(e.target.value);
    EditFalse();
  }
  const handleChangeTextArea = (e) => {
    setDesc(e.target.value);
    EditFalse();
  }
  const handleChangeDate = (e) => {
    setDate(e.target.value);
    EditFalse();
  }
  return (
    <FromDiv>
      <Form onSubmit={handleSubmit}>
        <Lable htmlFor="title">title:</Lable>
        <Input
        className='input' 
        type="text" 
        name="title" 
        id="title"
        placeholder="Add title"
        value={isEdit?EditTask[0].title:title}
        onChange={(e)=>handleChangeInput(e)}/>
        <Lable htmlFor="Desc">Desc:</Lable>
        <Textarea 
        type="text" 
        name="Desc" 
        // id="title"
        rows="8"
        cols="40"
        placeholder='Description..'
        value={isEdit?EditTask[0].Desc:Desc}
        onChange={(e)=>handleChangeTextArea(e)}>
        </Textarea>
        <Lable htmlFor="calender">Set Time</Lable>
        <Input
        className='input' 
        type="datetime-local" 
        name="calender" 
        id="" 
        onChange={(e)=>handleChangeDate(e)}
        value={Date}/>
        <button 
        type="submit"
        className='btn1 btn2'>
        Add</button>
      </Form>
    </FromDiv>
  )
}

export default AddTask