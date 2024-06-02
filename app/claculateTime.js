import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";







export function calcTime(time) {
  let intervalId;
let result;
const startDate = dayjs(time);
const todaysDate = dayjs();
const hourStart = dayjs();
const yearCalc = todaysDate.diff(startDate, 'year');
const monthCalc = todaysDate.diff(startDate, 'month');

  

const dayCalc = todaysDate.diff(startDate, 'day');

const hoursClac = todaysDate.diff(todaysDate)






  if (yearCalc === 0) {
    if (monthCalc >= 1) {
      if (monthCalc === 1) {
        result = monthCalc + ' Month';
        return  result;
      }else {
        result = monthCalc + ' Months';
        return  result;
      }
     

    } else if (monthCalc < 1) {
      if (dayCalc === 1) {
        result = dayCalc + ' day';
        return result;
      }else {
        result = dayCalc + ' days';
        return result;
      }


    } else if (dayCalc < 1) {
      if (hours === 1) {
      result = hours + 'hour';
      return result;
      }else {
        result = hours + ' hours';
        return result;
      }
    
    
    }  else if (hours < 1) {
      if (minutes === 1) {
        result = minutes + ' minute';
        return result;
      }else{
        result = minutes + ' minutes';
        return result;
      }
     
    }
  }else {
    if (yearCalc === 1 ){
      result = yearCalc + ' year';
      return result;
    }else {
      result = yearCalc + ' years';
      return result;
    }
  }
  return result;
}

const day = '2024-02-2'
console.log(calcTime(day))