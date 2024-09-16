// src/utils/utils.js
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US').format(new Date(date));
  };
  
  export const generateUniqueId = () => {
    return Date.now();
  };
  