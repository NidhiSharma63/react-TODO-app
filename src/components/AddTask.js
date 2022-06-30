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
  const {IsAddedFalse, EditTask, setTask,} = useStore();

  const [formData,setFormData] = useState({
    title: '',
    Desc: '',
    setDate:'',
    id:uuidv4(),
  });

  

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }


  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const {title,Desc,setDate,id} = formData;
    if(title && Desc){
      IsAddedFalse();
      setTask({title,Desc,setDate,id});
    }
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
        value={formData.title}
        onChange={handleChange}/>
        <Lable htmlFor="Desc">Desc:</Lable>
        <Textarea 
        type="text" 
        name="Desc" 
        // id="title"
        rows="8"
        cols="40"
        placeholder='Description..'
        value={formData.description}
        onChange={handleChange}></Textarea>
        <Lable htmlFor="calender">Set Time</Lable>
        <Input
        className='input' 
        type="datetime-local" 
        name="calender" 
        id="" 
        onChange={handleChange}
        value={formData.setDate}/>
        <button 
        type="submit"
        className='btn1 btn2'>
        Add</button>
      </Form>
    </FromDiv>
  )
}

export default AddTask