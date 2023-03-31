export const getTokenSessionStorage = () => {
  return sessionStorage.getItem('TOKEN');
};

export const removeTokenSessionStorage = () => {
  return sessionStorage.removeItem('TOKEN');
};
