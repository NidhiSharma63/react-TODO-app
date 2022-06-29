import React from 'react';
import styled from 'styled-components';
import useStore from '../store';

function AddTask() {
  const isAddeValue = useStore(state => state.isAddeValue);

  return (
    <div>AddTask
      <h1>{isAddeValue}</h1>
    </div>
  )
}

export default AddTask