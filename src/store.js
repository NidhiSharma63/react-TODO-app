import create from 'zustand';
import { devtools } from "zustand/middleware";

function set_state(state, task) {
  return {
    task: [task,...state.task,],
  }
};


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
      IsAddedTrue: () => set(state => ({ isAddTaskValue: true })),
      IsAddedFalse: () => set(state => ({ isAddTaskValue: false })),
      EditFalse: () => set(state => ({ isEdit: false })),

      setUserName: name => set(state => ({ userName: name })),

      setTask: task => set(state => set_state(state, task)),

      deleteTask: (id) => set(state => ({
        task: state.task.filter(t => t.id !== id)
      })),

      editTaskFun:(item) =>set(state=> handle_Edit(state,item)),
      // editTaskFun: item => set(state => (state.EditTask.push(item), state.isEdit = true)),
      ClearEditArray: () => set(state => (state.EditTask = [])),
    })
  )
);

export default useStore;
