// src/utils/utils.js
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(date));
  };
  
  export const generateUniqueId = () => {
    return Date.now() + Math.floor(Math.random() * 1000);
  };
  