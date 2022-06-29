import create from 'zustand';

const useStore = create(set => ({
  userName: '',
  task:[],
  isAddTaskValue:false,
  setUserName: name => set(state => ({ userName: name })),
  setTask: task => set(state => (state.task.push(task))),
  IsAddedTrue: isAddTaskValue => set(state => ({ isAddTaskValue: true })),
  IsAddedFalse: isAddTaskValue => set(state => ({ isAddTaskValue: false })),
}));

export default useStore;