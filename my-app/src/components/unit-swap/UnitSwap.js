import React, { useState } from "react";
import "./UnitSwap.css";
import Card from "../unit-cards/Card";

const App = () => {

  const [boxList, setBoxList] = useState([

      {
        id: 1,
        box_id: 1,
        semester_status: 3,
        name: "ENG1013",
        credit: "6",
        unitTitle: "Engineering smart systems",
        unitInfo: []
      },

      {
        id: 2,
        box_id: 2,
        semester_status: 3,
        name: "ENG1005",
        credit: "6",
        unitTitle: "Engineering Mathamatics",
        unitInfo: []
      },


      {
        id: 3,
        box_id: 3,
        semester_status: 3,
        name: "ENG1014",
        credit: "6",
        unitTitle: "Engineering numerical analysis",
        unitInfo: []
      },
  
      {
        id: 4,
        box_id: 4,
        semester_status: 3,
        name: "Elective",
        credit: "6",
        unitTitle: "First year elective",
        unitInfo: []
      },
  
      {
        id: 5,
        box_id: 5,
        semester_status: 3,
        name: "ENG1012",
        credit: "6",
        unitTitle: "Engineering design",
        unitInfo: []
      },

      {
        id: 6,
        box_id: 6,
        semester_status: 3,
        name: "ENG1011",
        credit: "6",
        unitTitle: "Engineering methods",
        unitInfo: []
      },
      
      {
        id: 7,
        box_id: 7,
        semester_status: 3,
        name: "Elective",
        credit: "6",
        unitTitle: "Level 1,2,3 elective",
        unitInfo: []
      },

      {
        id: 8,
        box_id: 8,
        semester_status: 3,
        name: "Elective",
        credit: "6",
        unitTitle: "Level 1,2,3 elective",
        unitInfo: [],
      },

      
      {
        id: 9,
        box_id: 9,
        semester_status: 1,
        name: "MEC2402",
        credit: "6",
        unitTitle: "Design methods",
        unitInfo: []
      },

            
      {
        id: 10,
        box_id: 10,
        semester_status: 1,
        name: "MEC2403",
        credit: "6",
        unitTitle: "Mechanics of materials",
        unitInfo: []
      },

      
      {
        id: 11,
        box_id: 11,
        semester_status: 3,
        name: "ENG2005",
        credit: "6",
        unitTitle: "Advanced engineering mathematics",
        unitInfo: []
      },

      {
        id: 12,
        box_id: 12,
        semester_status: 3,
        name: "Elective",
        credit: "6",
        unitTitle: "Level 1,2,3 elective",
        unitInfo: []
      },

      {
        id: 13,
        box_id: 13,
        semester_status: 2,
        name: "MAE2402",
        credit: "6",
        unitTitle: "Thermodynamics and gas dynamics",
        unitInfo: []
      },

      {
        id: 14,
        box_id: 14,
        semester_status: 2,
        name: "MAE2404",
        credit: "6",
        unitTitle: "Aerodynamics 1",
        unitInfo: []
      },

      
      {
        id: 15,
        box_id: 15,
        semester_status: 2,
        name: "MAE2505",
        credit: "6",
        unitTitle: "Aerospace dynamics",
        unitInfo: []
      },

      {
        id: 16,
        box_id: 16,
        semester_status: 3,
        name: "Elective",
        credit: "6",
        unitTitle: "Level 1,2,3 elective",
        unitInfo: []
      },

      {
        id: 17,
        box_id: 17,
        semester_status: 1,
        name: "MAE3401",
        credit: "6",
        unitTitle: "Aerodynamics 2",
        unitInfo: []
      },

      {
        id: 18,
        box_id: 18,
        semester_status: 1,
        name: "MAE3404",
        credit: "6",
        unitTitle: "Flight vehicle dynamics",
        unitInfo: []
      },

      {
        id: 19,
        box_id: 19,
        semester_status: 1,
        name: "MEC3456",
        credit: "6",
        unitTitle: "Engineering computational analysis",
        unitInfo: []
      },

      {
        id: 20,
        box_id: 20,
        semester_status: 3,
        name: "Elective",
        credit: "6",
        unitTitle: "Level 1,2,3 elective",
        unitInfo: []
      },

      {
        id: 21,
        box_id: 21,
        semester_status: 2,
        name: "MAE3405",
        credit: "6",
        unitTitle: "Aerospace propulsion",
        unitInfo: []
      },

      {
        id: 22,
        box_id: 22,
        semester_status: 2,
        name: "MAE3408",
        credit: "6",
        unitTitle: "Aerospace control",
        unitInfo: []
      },

      
      {
        id: 23,
        box_id: 23,
        semester_status: 2,
        name: "MAE3411",
        credit: "6",
        unitTitle: "Aerospace structural mechanics",
        unitInfo: []
      },

      {
        id: 24,
        box_id: 24,
        semester_status: 3,
        name: "Elective",
        credit: "6",
        unitTitle: "Level 1,2,3 elective",
        unitInfo: []
      },


      {
        id: 25,
        box_id: 25,
        semester_status: 3,
        name: "ENG4701",
        credit: "6",
        unitTitle: "Final year project A",
        unitInfo: []
      },

      {
        id: 26,
        box_id: 26,
        semester_status: 1,
        name: "MAE4416",
        credit: "6",
        unitTitle: "Orbital mechanics and spaceflight dynamics",
        unitInfo: []
      },

      {
        id: 27,
        box_id: 27,
        semester_status: 1,
        name: "MEC4404",
        credit: "6",
        unitTitle: "Professional practice",
        unitInfo: []
      },

      
      {
        id: 28,
        box_id: 28,
        semester_status: 3,
        name: "Elective",
        credit: "6",
        unitTitle: "Level 1,2,3 elective",
        unitInfo: []
      },

      {
        id: 29,
        box_id: 29,
        semester_status: 3,
        name: "ENG4702",
        credit: "6",
        unitTitle: "Final year project B",
        unitInfo: []
      },

      {
        id: 30,
        box_id: 30,
        semester_status: 2,
        name: "MAE4426",
        credit: "6",
        unitTitle: "Finite element analysis and composite structures",
        unitInfo: []
      },

      {
        id: 31,
        box_id: 31,
        semester_status: 2,
        name: "MAE4410",
        credit: "6",
        unitTitle: "Flight vehicle design",
        unitInfo: []
      },

      {
        id: 32,
        box_id: 32,
        semester_status:3,
        name: "Elective",
        credit: "6",
        unitTitle: "Level 1,2,3 elective",
        unitInfo: []
      },
     
  
    
  ])

  const makeBoxes = () => {
    return (
      <div className="box-container">
        <div className="year-container">

          <div className="year-sem-container">
            <h1 className="year-text">2023</h1>

            <div className="sem-container">
              <p className="sem-text">Semester 1</p>
              <p className="sem-text">Semester 2</p>
            </div>

          </div>

          <div className="year-sem-container">
            <h1 className="year-text">2024</h1>

            <div className="sem-container">
              <p className="sem-text">Semester 1</p>
              <p className="sem-text">Semester 2</p>
            </div>
            
          </div>

          <div className="year-sem-container">
            <h1 className="year-text">2025</h1>

            <div className="sem-container">
              <p className="sem-text">Semester 1</p>
              <p className="sem-text">Semester 2</p>
            </div>
            
          </div>

          <div className="year-sem-container">
            <h1 className="year-text">2026</h1>

            <div className="sem-container">
              <p className="sem-text">Semester 1</p>
              <p className="sem-text">Semester 2</p>
            </div>
            
          </div>

        </div>

        <div className="unit-box-container">
          {/* {boxList.map((unit, index) => (
          <Card
            key={index}
            unitTitle={unit.unitTitle}
            unitCode={unit.unitCode}
            creditPoints={unit.creditPoints}
            semesterOfferings={unit.semesterOfferings}
          />
        ))} */}

        </div>
      </div>
      
    );
  };

  return <div className="boxesGroup">{makeBoxes()}</div>;
};

export default App;
