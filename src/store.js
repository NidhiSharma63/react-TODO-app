import create from 'zustand';
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools(
    set => ({
      userName: '',
      task:[],
      isAddTaskValue:false,
      EditTask:[],
      isEdit:false,
      IsAddedTrue: () => set(state => ({ isAddTaskValue: true })),
      IsAddedFalse: () => set(state => ({ isAddTaskValue: false })),
    
      setUserName: name => set(state => ({ userName: name })),
      setTask: task => set(state => (state.task.push(task))),
      deleteTask: (id) => set(state =>({
        task: state.task.filter(t => t.id !== id)
      })),
      editTaskFun: item => set(state => (state.EditTask.push(item),state.isEdit=true)),
      // editTaskFun:(item) =>set (state=>(
      //   // console.log(item),
      //   {EditTask:state.EditTask.push(item)})),
    })
  )
);

export default useStore;
// {
//   EditTask:state.EditTask.push(item),
// }