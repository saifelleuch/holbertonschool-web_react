export const getFullYear = () => {
  return new Date().getFullYear();
};
  
export const getFooterCopy = (isIndex) => {
  let returned = undefined;
  isIndex
   ? (returned = 'Holberton School')
   : (returned = 'Holberton School main dashboard');
  return returned;
};

export const getLatestNotification = () =>
  '<strong>Urgent requirement</strong> - complete by EOD';