export const getTokenLocalStorage = () => {
  if (localStorage.getItem('TOKEN') === 'undefined') return undefined;
  return localStorage.getItem('TOKEN');
};

export const setTokenLocalStorage = (token: string) => {
  return localStorage.setItem('TOKEN', token);
};

export const removeTokenLocalStorage = () => {
  return localStorage.removeItem('TOKEN');
};

export const getRefreshTokenLocalStorage = () => {
  return localStorage.getItem('REFRESH_TOKEN');
};

export const setRefreshTokenLocalStorage = (token: string) => {
  return localStorage.setItem('REFRESH_TOKEN', token);
};

export const removeRefreshTokenLocalStorage = () => {
  return localStorage.removeItem('REFRESH_TOKEN');
};
