import create from 'zustand';

const useStore = create(set => ({
  userName: '',
  task:[],
  setUserName: name => set(state => ({ userName: name })),
}));

export default useStore;