import React, {useEffect, useState} from "react";
import { start } from "repl";

const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const oneDay = 60 * 60 * 24 * 1000;

let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);

const Datepicker = (props) => {

  const getNumberOfDays =(year, month)=> {
    return 40 - new Date(year, month, 40).getDate();
  }

  const getDayDetails =args=> {
    let date = args.index - args.firstDay; 
    let day = args.index%7;
    let prevMonth = args.month-1;
    let prevYear = args.year;
    if(prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
    let _date = (date < 0 ? prevMonthNumberOfDays+date : date % args.numberOfDays) + 1;
    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();
    return {
        date: _date,
        day,
        month, 
        timestamp,
        dayString: daysMap[day]
    }
  }

  const getMonthDetails = (year, month) => {
    let firstDay = (new Date(year, month)).getDay();
    let numberOfDays = getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 6;
    let currentDay = null;
    let index = 0; 
    let cols = 7;

    for(let row=0; row<rows; row++) {
        for(let col=0; col<cols; col++) { 
            currentDay = getDayDetails({
                index,
                numberOfDays,
                firstDay,
                year,
                month
            });
            monthArray.push(currentDay);
            index++;
        }
    }
    return monthArray;
  };

  const isCurrentDay =day=> {
    return day.timestamp === todayTimestamp;
  }
  
  const isSelectedDay =day=> {
    return day.month=== 0 && startDate != null && endDate != null && startDate.timestamp <= day.timestamp && day.timestamp <= endDate.timestamp;
  }

  const isStartOrEndDay = day => {
    return day.month == 0 && startDate != null && endDate != null && (startDate.timestamp === day.timestamp || endDate.timestamp === day.timestamp);
  }

  const getMonthStr = (month) => monthMap[Math.max(Math.min(11, month), 0)] || 'Month';

  const onDateClick = (day) => {
    if(startDate === null) {
      setStartDate(day);
      return;
    }
    if(day.timestamp < startDate.timestamp) {
      /* If the end date chosen is before start date, we switch the dates */
      setEndDate(startDate);
      setStartDate(day);
      return;
    }
    setEndDate(day);
    //setSelectedDay(day.timestamp);
    /*
    if(this.props.onChange) {
        this.props.onChange(day.timestamp);
    }
    */
  } 

  let date = new Date();

  const [selectedDay, setSelectedDay] = useState(todayTimestamp);
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [monthDetails, setMonthDetails] = useState(getMonthDetails(year, month));
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const renderCalendar = () => {
    let days = monthDetails.map((day, index)=> {
        return (
            <div className={'c-day-container ' + (day.month !== 0 ? ' text-gray-200 cursor-not-allowed' : 'cursor-pointer') + 
                (isCurrentDay(day) ? ' highlight' : '') + (isSelectedDay(day) ? (isStartOrEndDay(day) ? ' bg-ochre-200': ' bg-ochre-100') : '')} key={index} onClick={()=>onDateClick(day)}>
                <div className='font-sfprobold text-md px-3 py-3 flex justify-center align-center'>
                    <span>
                        {day.date}
                    </span>
                </div>
            </div>
        )
    })

    return (
        <div className='px-5 grid grid-cols-7 container'>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d,i)=><div key={i} className='text-xs font-sfprosemibold text-gray-300 flex align-center justify-center'>{d}</div>)}
                <div className="h-0.5 w-full bg-gray-200 col-span-7 my-2"></div>
                {days}
        </div>
    )
  }

  const offsetMonth = (offset) => {
    let new_year = year;
    let new_month = month + offset;
    if(new_month === -1) {
        new_month = 11;
        new_year--;
    } else if(new_month === 12) {
        new_month = 0;
        new_year++;
    }
    setMonth(new_month);
    setYear(new_year);
    setMonthDetails(getMonthDetails(new_year, new_month));
  }

  return (
    <div className="my-7">
      <div className="font-sfprolight text-2xl text-gray-500 pt-10 pl-5">
        {props.label}
      </div>
      <div>
        <div className="flex flex-row justify-center align-center my-5 px-10">
          <div className="flex flex-row w-full">
            <div className="cursor-pointer flex justify-center align-center w-1/5" onClick={() => offsetMonth(-1)}>
              <img src="/assets/images/less_than.png"/>
            </div>
            <div className="flex justify-center align-center mx-7 font-sfprosemibold text-xl w-3/5">{getMonthStr(month)} {year}</div>
            <div className="flex justify-center align-center w-1/5 cursor-pointer" onClick={() => offsetMonth(1)}>
              <img src="/assets/images/greater_than.png"/>
            </div>
          </div>
        </div>
        <div>
          {renderCalendar()}
        </div>
      </div>
    </div>
  );
};
export default Datepicker;
