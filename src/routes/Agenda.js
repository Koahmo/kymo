import React, { Fragment, useState } from 'react'
import dayjs from 'dayjs'


 function getMonth(month = dayjs().month()) {
    const year = dayjs().year()
    const firstDayOfTheMonth = dayjs(new Date(year,month,1)).day()
    let currentMonthCount = 0 - firstDayOfTheMonth
    const daysMatrix = new Array(5).fill([]).map(() => {
      return new Array(7).fill (null).map(() => {
          currentMonthCount++
          return dayjs(new Date(year, month, currentMonthCount))
      })
    })
    return daysMatrix
  }

  function Month({month}){
    return(
      <div className='grid'>
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day,idx) =>(
              <Day day={day} key={idx} rowIdx={i}/>
            ))}
          </React.Fragment>
        ))}
      
      </div>
    )
  }

  function Day({day, rowIdx}) {
      function getCurrentDayClass() {
        return day.format('DD-MM-YY') === dayjs().format("DD-MM-YY") ? "current-day" : "";
      }
    return(
        <div className='date'>
            {rowIdx === 0 && (
                <span className='day'>{day.format('ddd').toUpperCase()}</span>
            )}
            <p   className={`day-number ${getCurrentDayClass()}`}>
            {day.format('DD')}
            </p>
        </div>
    )
}

function CalendarHeader() {
  return(
    <div>
    <button>Aujourd'hui</button>
    <button>
      <i className='bx bx-chevron-left'></i>
    </button>

    <button>
      <i className='bx bx-chevron-right'></i>
    </button>

    </div>
  )
}

export default function Agenda() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
    return (
      <React.Fragment>
        <div className="top">
            <CalendarHeader/>
            <div className="search-box">
                <i className="uil uil-search"></i>
                <input type="text" placeholder="  T'es perdu ??? Arrête !!! "/>
            </div>
        </div>
        <div className="dash-content">
            <div className="overview">
            
                 <div className='text'>
                 <Month month={currentMonth}/>                
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
  
