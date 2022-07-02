import React, {useState,useRef} from 'react';
import styled from 'styled-components';
import useStore from '../store';
import { v4 as uuidv4 } from 'uuid';
import '../calender.css';
import Calendar from 'react-calendar';
import '../App.css';


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
  letter-spacing: .1rem;
`;
const Textarea = styled.textarea`
  background: #f2f7f7;
  overflow: hidden;
  font-size: 2rem;
  resize: none;
  color:#067969;
  border-radius: .6rem;
`;
const P = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;

function AddTask() {

  return(
    <h1>edit page</h1>
  ) 
}

export default AddTask;