import React from 'react';
import './Styles/ShowDate.css';
import { MdDateRange } from "react-icons/md";

const ShowDate = (date) => {
    const formatDate = (date) => {
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
  
      return `${getOrdinalSuffix(day)} ${month} ${year}`;
    };
  
    const getOrdinalSuffix = (number) => {
      const suffixes = ['th', 'st', 'nd', 'rd'];
      const v = number % 100;
      return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    };
  
    return (
        <div className='show-date'>
          <MdDateRange />
          {formatDate(date)}
        </div>
      );
    };
  
  export default ShowDate;
  