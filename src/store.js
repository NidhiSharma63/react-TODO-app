import create from 'zustand';

const useStore = create(set => ({
  userName: '',
  task:[],
  isAddeValue:false,
  setUserName: name => set(state => ({ userName: name })),
  setTask: task => set(state => ({ task: task })),
  IsAddedTrue: isAddeValue => set(state => ({ isAddeValue: true })),
  IsAddedFalse: isAddeValue => set(state => ({ isAddeValue: false })),
}));

export default useStore;