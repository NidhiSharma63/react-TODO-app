import React from 'react';
import styled from 'styled-components';
import useStore from '../store';

const FromDiv = styled.div`
  display: flex;
  // border: 1px solid black;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  // border: 1px solid orange;
`

const Lable = styled.label`
  font-size: 2.3rem;
  margin: 2rem 1rem 2rem 0rem;
  font-weight: 400;
  background-color: #067969;
  padding: 1rem;
  color: white;
  border-radius: .6rem;
`

const Input = styled.input`
  color:#067969;
  border-bottom:.5px solid #067969;
  letter-spacing: .3rem;
`

const Textarea = styled.textarea`
  background: #f2f7f7;
  overflow: hidden;
  font-size: 2rem;
  resize: none;
  color:#067969;
  border-radius: .6rem;
`
const Button = styled.button`
  font-size: 2.3rem;
  background-color: #067969;
  margin-left: 0rem;
  margin-top: 2rem;
`


function AddTask() {
  const isAddTaskValue = useStore(state => state.isAddTaskValue);

  return (
    <FromDiv>
      <Form action="">
        <Lable htmlFor="title">title:</Lable>
        <Input
        className='input' 
        type="text" 
        name="title" 
        id="title"
        placeholder="Add title"/>
        <Lable htmlFor="Desc">Desc:</Lable>
        <Textarea 
        type="text" 
        name="Desc" 
        id="title"
        rows="8"
        cols="40"
        placeholder='Description..'></Textarea>
        <Lable htmlFor="calender">Set Time</Lable>
        <Input
        className='input' 
        type="datetime-local" 
        name="calender" 
        id="" />
        <Button 
        type="submit"
        className='btn AddTask'>Add</Button>
      </Form>
    </FromDiv>
  )
}

export default AddTask