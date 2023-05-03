import React from 'react'
import './grid.css';

const dates = ["Semester 1 2022, Semester 2, 2022, Semester 1 2023, Semester 2 2023"];

const Grid = () => {
  return (
    
  <div className="grid-container">

    <div className="specialisation-name">Specialisation - Mechatronics Engineering</div>

    <div className="date-container">
      <div class="date-row">
        <div class="cell-1-date">date</div>
      </div>
    </div>

    <div className="units-container">
      <div className="first-year-units">
        <div class="cell-unit">unit-1</div>
        <div class="cell-unit">unit-2</div>
        <div class="cell-unit">unit-3</div>
        <div class="cell-unit">unit-4</div>
        <div class="cell-unit">unit-5</div>
        <div class="cell-unit">unit-6</div>
        <div class="cell-unit">unit-7</div>
        <div class="cell-unit">unit-8</div>
      </div>

      <div className="second-year-units">
        <div class="cell-unit">unit-1</div>
        <div class="cell-unit">unit-2</div>
        <div class="cell-unit">unit-3</div>
        <div class="cell-unit">unit-4</div>
        <div class="cell-unit">unit-5</div>
        <div class="cell-unit">unit-6</div>
        <div class="cell-unit">unit-7</div>
        <div class="cell-unit">unit-8</div>
      </div>

      <div className="third-year-units">
        <div class="cell-unit">unit-1</div>
        <div class="cell-unit">unit-2</div>
        <div class="cell-unit">unit-3</div>
        <div class="cell-unit">unit-4</div>
        <div class="cell-unit">unit-5</div>
        <div class="cell-unit">unit-6</div>
        <div class="cell-unit">unit-7</div>
        <div class="cell-unit">unit-8</div>
      </div>

      <div className="fourth-year-units">
        <div class="cell-unit">unit-1</div>
        <div class="cell-unit">unit-2</div>
        <div class="cell-unit">unit-3</div>
        <div class="cell-unit">unit-4</div>
        <div class="cell-unit">unit-5</div>
        <div class="cell-unit">unit-6</div>
        <div class="cell-unit">unit-7</div>
        <div class="cell-unit">unit-8</div>
      </div>

      <div className="fifth-year-units">
        <div class="cell-unit">unit-1</div>
        <div class="cell-unit">unit-2</div>
        <div class="cell-unit">unit-3</div>
        <div class="cell-unit">unit-4</div>
        <div class="cell-unit">unit-5</div>
        <div class="cell-unit">unit-6</div>
        <div class="cell-unit">unit-7</div>
        <div class="cell-unit">unit-8</div>
      </div>
      
    </div>
        
    <div className="sidebar-container">
      <div className="sidebar-name">Unit(s)</div>

      <div className="sidebar-units-container">
        <div class="sidebar-unit">sidebar-unit-1</div>
        <div class="sidebar-unit">sidebar-unit-2</div>
        <div class="sidebar-unit">sidebar-unit-3</div>
      </div>

    </div>

    <div className="progress-container">


    </div>

    </div> 

    
  )
}





export default Grid

