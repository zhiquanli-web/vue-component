import useUserStore from './user';

const useStore = () => {
  return {
    user: useUserStore()
  };
};

export { useStore };
