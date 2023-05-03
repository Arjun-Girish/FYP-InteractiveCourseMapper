import React from 'react'
import './search-units.css';
import {useState} from "react";

const SearchUnits = () => {
  const [title, setTitle] = useState('');
  return (
    
  <div className="search-container">
    <div className="filters">
      <h1 className="unit-code-search">Search by unit code</h1>

      <form>
            <label>
              <input type="text" name="name" />
            </label>
          </form>

      <h1 className="course-tite">Search by course title</h1>

      <form>
        <label>
            <input type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            />
        </label>
      </form>

      <h1 className="filter-title">Filter by</h1>

      <h1 className="major-minor">Major/Minor</h1>

        <form>
        <label>
          <select>
            <option value="major-degree">Major</option>
            <option value="minor-major">Minor</option>
          </select>
        </label>
        </form>

      <h1 className="teaching-period">Teaching Period</h1>

      <form>
        <label>
          <select>
            <option value="teaching-period-full">Semester 1</option>
            <option value="teaching-ierod-part">Semester 2</option>
          </select>
        </label>
        </form>

      <h1 className="learning-outcomes">Learning Outcomes</h1>

      <form>
        <label>
            <input type="text" name="name" />
        </label>
      </form>
      
      <h1 className="ea-competencies">EA Competencies</h1>

      <form>
        <label>
          <select>
            <option value="full-time-study">Full-Time</option>
            <option value="part-time-study">Part-Time</option>
          </select>
        </label>
        </form>


    </div>

    <div className="unit-results">
    <h1 className="2">Showing results for ...</h1>
    <p> {title}</p>

      
    </div> 

  </div> 
    
  )
}

export default SearchUnits

