import React from 'react'

function TodayDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
  
  
    return (
      <div>
        <h2>Today's Date</h2>
        <p>{formattedDate}</p>
      </div>
    );
  }
  
export default TodayDate;