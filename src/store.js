import create from 'zustand';
import { devtools } from "zustand/middleware";

function set_state(state, newTask) {
    if(JSON.parse(localStorage.getItem('task'))!=null){
      state.task = JSON.parse(localStorage.getItem('task'));
    }
    state.task.push(newTask);
    localStorage.setItem('task', JSON.stringify(state.task));
    return;
};

function loadPrevTask(state) {
  if(JSON.parse(localStorage.getItem('task'))!=null){
    state.task = JSON.parse(localStorage.getItem('task'));
  }
  return 
}

// window.onload = loadPrevTask;
function handle_Edit(state, item) {
  state.EditTask.push(item);
  state.isEdit = true;
  return {
    task: state.task.filter(item => item.id !== state.EditTask[0].id),
  };
}

const useStore = create(
  devtools(
    set => ({
      userName: '',
      task: [],
      isAddTaskValue: false,
      EditTask: [],
      isEdit: false,
      Portal: false,

      setPortal: (value) => set(state => state.Portal = value),

      IsAddedTrue: () => set(state => ({ isAddTaskValue: true })),
      IsAddedFalse: () => set(state => ({ isAddTaskValue: false })),
      EditFalse: () => set(state => ({ isEdit: false })),

      setUserName: name => set(state => ({ userName: name })),

      setTask: newTask => set(state => set_state(state, newTask)),

      deleteTask: (id) => set(state => ({
        task: state.task.filter(t => t.id !== id)
      })),

      editTaskFun:(item) =>set(state=> handle_Edit(state,item)),
      ClearEditArray: () => set(state => (state.EditTask = [])),
      loadPrevTask: () => set(state => loadPrevTask(state)),
    })
  )
);

export default useStore;
