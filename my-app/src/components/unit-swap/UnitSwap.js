import React, { useState } from "react";
import "./UnitSwap.css";
import Card from "../unit-cards/Card";

const App = () => {

  const [boxList, setBoxList] = useState([

      {
        id: 1,
        box_id: 1,
        semester_status: 3,
        unitCode: "ENG1013",
        creditPoints: "6",
        unitTitle: "Engineering smart systems",
        semesterOfferings: ["Semester 1", "Semester 2"]
      },

      {
        id: 2,
        box_id: 2,
        semester_status: 3,
        unitCode: "ENG1005",
        creditPoints: "6",
        unitTitle: "Engineering Mathamatics",
        semesterOfferings: []
      },


      {
        id: 3,
        box_id: 3,
        semester_status: 3,
        unitCode: "ENG1014",
        creditPoints: "6",
        unitTitle: "Engineering numerical analysis",
        semesterOfferings: []
      },
  
      {
        id: 4,
        box_id: 4,
        semester_status: 3,
        unitCode: "Elective",
        creditPoints: "6",
        unitTitle: "First year elective",
        semesterOfferings: []
      },
  
      {
        id: 5,
        box_id: 5,
        semester_status: 3,
        unitCode: "ENG1012",
        creditPoints: "6",
        unitTitle: "Engineering design",
        semesterOfferings: []
      },

      {
        id: 6,
        box_id: 6,
        semester_status: 3,
        unitCode: "ENG1011",
        creditPoints: "6",
        unitTitle: "Engineering methods",
        semesterOfferings: []
      },
      
      {
        id: 7,
        box_id: 7,
        semester_status: 3,
        unitCode: "Elective",
        creditPoints: "6",
        unitTitle: "Level 1,2,3 elective",
        semesterOfferings: []
      },

      {
        id: 8,
        box_id: 8,
        semester_status: 3,
        unitCode: "Elective",
        creditPoints: "6",
        unitTitle: "Level 1,2,3 elective",
        semesterOfferings: [],
      },

      
      {
        id: 9,
        box_id: 9,
        semester_status: 1,
        unitCode: "MEC2402",
        creditPoints: "6",
        unitTitle: "Design methods",
        semesterOfferings: []
      },

            
      {
        id: 10,
        box_id: 10,
        semester_status: 1,
        unitCode: "MEC2403",
        creditPoints: "6",
        unitTitle: "Mechanics of materials",
        semesterOfferings: []
      },

      
      {
        id: 11,
        box_id: 11,
        semester_status: 3,
        unitCode: "ENG2005",
        creditPoints: "6",
        unitTitle: "Advanced engineering mathematics",
        semesterOfferings: []
      },

      {
        id: 12,
        box_id: 12,
        semester_status: 3,
        unitCode: "Elective",
        creditPoints: "6",
        unitTitle: "Level 1,2,3 elective",
        semesterOfferings: []
      },

      {
        id: 13,
        box_id: 13,
        semester_status: 2,
        unitCode: "MAE2402",
        creditPoints: "6",
        unitTitle: "Thermodynamics and gas dynamics",
        semesterOfferings: []
      },

      {
        id: 14,
        box_id: 14,
        semester_status: 2,
        unitCode: "MAE2404",
        creditPoints: "6",
        unitTitle: "Aerodynamics 1",
        semesterOfferings: []
      },

      
      {
        id: 15,
        box_id: 15,
        semester_status: 2,
        unitCode: "MAE2505",
        creditPoints: "6",
        unitTitle: "Aerospace dynamics",
        semesterOfferings: []
      },

      {
        id: 16,
        box_id: 16,
        semester_status: 3,
        unitCode: "Elective",
        creditPoints: "6",
        unitTitle: "Level 1,2,3 elective",
        semesterOfferings: []
      },

      {
        id: 17,
        box_id: 17,
        semester_status: 1,
        unitCode: "MAE3401",
        creditPoints: "6",
        unitTitle: "Aerodynamics 2",
        semesterOfferings: []
      },

      {
        id: 18,
        box_id: 18,
        semester_status: 1,
        unitCode: "MAE3404",
        creditPoints: "6",
        unitTitle: "Flight vehicle dynamics",
        semesterOfferings: []
      },

      {
        id: 19,
        box_id: 19,
        semester_status: 1,
        unitCode: "MEC3456",
        creditPoints: "6",
        unitTitle: "Engineering computational analysis",
        semesterOfferings: []
      },

      {
        id: 20,
        box_id: 20,
        semester_status: 3,
        unitCode: "Elective",
        creditPoints: "6",
        unitTitle: "Level 1,2,3 elective",
        semesterOfferings: []
      },

      {
        id: 21,
        box_id: 21,
        semester_status: 2,
        unitCode: "MAE3405",
        creditPoints: "6",
        unitTitle: "Aerospace propulsion",
        semesterOfferings: []
      },

      {
        id: 22,
        box_id: 22,
        semester_status: 2,
        unitCode: "MAE3408",
        creditPoints: "6",
        unitTitle: "Aerospace control",
        semesterOfferings: []
      },

      
      {
        id: 23,
        box_id: 23,
        semester_status: 2,
        unitCode: "MAE3411",
        creditPoints: "6",
        unitTitle: "Aerospace structural mechanics",
        semesterOfferings: []
      },

      {
        id: 24,
        box_id: 24,
        semester_status: 3,
        unitCode: "Elective",
        creditPoints: "6",
        unitTitle: "Level 1,2,3 elective",
        semesterOfferings: []
      },


      {
        id: 25,
        box_id: 25,
        semester_status: 3,
        unitCode: "ENG4701",
        creditPoints: "6",
        unitTitle: "Final year project A",
        semesterOfferings: []
      },

      {
        id: 26,
        box_id: 26,
        semester_status: 1,
        unitCode: "MAE4416",
        creditPoints: "6",
        unitTitle: "Orbital mechanics and spaceflight dynamics",
        semesterOfferings: []
      },

      {
        id: 27,
        box_id: 27,
        semester_status: 1,
        unitCode: "MEC4404",
        creditPoints: "6",
        unitTitle: "Professional practice",
        semesterOfferings: []
      },

      
      {
        id: 28,
        box_id: 28,
        semester_status: 3,
        unitCode: "Elective",
        creditPoints: "6",
        unitTitle: "Level 1,2,3 elective",
        semesterOfferings: []
      },

      {
        id: 29,
        box_id: 29,
        semester_status: 3,
        unitCode: "ENG4702",
        creditPoints: "6",
        unitTitle: "Final year project B",
        semesterOfferings: []
      },

      {
        id: 30,
        box_id: 30,
        semester_status: 2,
        unitCode: "MAE4426",
        creditPoints: "6",
        unitTitle: "Finite element analysis and composite structures",
        semesterOfferings: []
      },

      {
        id: 31,
        box_id: 31,
        semester_status: 2,
        unitCode: "MAE4410",
        creditPoints: "6",
        unitTitle: "Flight vehicle design",
        semesterOfferings: []
      },

      {
        id: 32,
        box_id: 32,
        semester_status:3,
        unitCode: "Elective",
        creditPoints: "6",
        unitTitle: "Level 1,2,3 elective",
        semesterOfferings: []
      },
     
  
    
  ])

  const swapBoxes = (fromBox, toBox) => {
    let boxes = boxList.slice();
    let fromIndex = boxes.findIndex((box) => box.id === fromBox.id) ?? -1;
    let toIndex = boxes.findIndex((box) => box.id === toBox.id) ?? -1;
    
    let fromSem = boxes[fromIndex].semester_status;
    let semunitCode = boxes[toIndex].unitCode;
    let toSem = boxes[toIndex].semester_status;

    console.log("to sem: " + toSem)
    console.log("from sem: " + fromSem)

    if (fromIndex != -1 && toIndex != -1)
    {
      let swap_status = 0;

      if (fromSem == toSem)
      {

        let temp = boxes[fromIndex];
        boxes[fromIndex] = { ...boxes[toIndex], id: boxes[fromIndex].id };
        boxes[toIndex] = { ...temp, id: boxes[toIndex].id };
        setBoxList(boxes);
        swap_status = 1;
      }

      if (fromSem == 3)
      {
        let fromSem_i = boxes[fromIndex].id;

        // Switching from unit running in semester 1
        if (fromSem_i == 1 || fromSem_i == 2 || fromSem_i == 3 || fromSem_i == 4 || fromSem_i == 9 || fromSem_i == 10 || fromSem_i == 11 || fromSem_i == 12 || fromSem_i == 17 || fromSem_i == 18 || fromSem_i == 19 || fromSem_i == 20 || fromSem_i == 25 || fromSem_i == 26 || fromSem_i == 27 || fromSem_i == 28)
        {          

          if (toSem == 1)
          {
            let temp = boxes[fromIndex];
            boxes[fromIndex] = { ...boxes[toIndex], id: boxes[fromIndex].id };
            boxes[toIndex] = { ...temp, id: boxes[toIndex].id };
            setBoxList(boxes);
            swap_status = 1;
          }
        }

        // Switching from unit running in semester 2
        if (fromSem_i == 5 || fromSem_i == 6 || fromSem_i == 7 || fromSem_i == 8 || fromSem_i == 13 || fromSem_i == 14 || fromSem_i == 15 || fromSem_i == 16 || fromSem_i == 21 || fromSem_i == 22 || fromSem_i == 23 || fromSem_i == 24 || fromSem_i == 29 || fromSem_i == 30 || fromSem_i == 31 || fromSem_i == 32)
        {
           
          if (toSem == 2)
          {
            let temp = boxes[fromIndex];
            boxes[fromIndex] = { ...boxes[toIndex], id: boxes[fromIndex].id };
            boxes[toIndex] = { ...temp, id: boxes[toIndex].id };
            setBoxList(boxes);
            swap_status = 1;
          }
        }
      }

      if (toSem == 3)
      {
        let toSem_i = boxes[toIndex].id;

        // Switching from unit running in semester 1
        if (toSem_i == 1 || toSem_i == 2 || toSem_i == 3 || toSem_i == 4 || toSem_i == 9 || toSem_i == 10 || toSem_i == 11 || toSem_i == 12 || toSem_i == 17 || toSem_i == 18 || toSem_i == 19 || toSem_i == 20 || toSem_i == 25 || toSem_i == 26 || toSem_i == 27 || toSem_i == 28)
        {          

          if (fromSem == 1)
          {
            let temp = boxes[fromIndex];
            boxes[fromIndex] = { ...boxes[toIndex], id: boxes[fromIndex].id };
            boxes[toIndex] = { ...temp, id: boxes[toIndex].id };
            setBoxList(boxes);
            swap_status = 1;
          }
        }

        // Switching from unit running in semester 2
        if (toSem_i == 5 || toSem_i == 6 || toSem_i == 7 || toSem_i == 8 || toSem_i == 13 || toSem_i == 14 || toSem_i == 15 || toSem_i == 16 || toSem_i == 21 || toSem_i == 22 || toSem_i == 23 || toSem_i == 24 || toSem_i == 29 || toSem_i == 30 || toSem_i == 31 || toSem_i == 32)
        {
           
          if (fromSem == 2)
          {
            let temp = boxes[fromIndex];
            boxes[fromIndex] = { ...boxes[toIndex], id: boxes[fromIndex].id };
            boxes[toIndex] = { ...temp, id: boxes[toIndex].id };
            setBoxList(boxes);
            swap_status = 1;
          }
        }
        
      }

      if (swap_status != 1)
      {
      alert("ERROR: Units are not offered in selected semesters")
      }
    }

  };


  const handleDragStart = (data) => (event) => {
    let fromBox = JSON.stringify({ id: data.id });
    event.dataTransfer.setData("dragContent", fromBox);
  };

  const handleDragOver = (data) => (event) => {
    event.preventDefault();
    return false;
  };

  const handleDrop = (data) => (event) => {
    event.preventDefault();
    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { id: data.id };
    
    swapBoxes(fromBox, toBox);
    return false;
  };
  
  const [popupToggle, setPopupToggle] = useState(false);
  const [popupContent, setupPopupContent] = useState([]);

  const changeContent=(box)=>{
    setupPopupContent([box]);
    setPopupToggle(!popupToggle);
  }

  const makeBoxes = () => {
    return (
      <div classunitCode="box-container">

        <div classunitCode="year-container">

          <div classunitCode="year-sem-container">
            <h1 classunitCode="year-text">2023</h1>

            <div classunitCode="sem-container">
              <p classunitCode="sem-text">Semester 1</p>
              <p classunitCode="sem-text">Semester 2</p>
            </div>

          </div>

          <div classunitCode="year-sem-container">
            <h1 classunitCode="year-text">2024</h1>

            <div classunitCode="sem-container">
              <p classunitCode="sem-text">Semester 1</p>
              <p classunitCode="sem-text">Semester 2</p>
            </div>
            
          </div>

          <div classunitCode="year-sem-container">
            <h1 classunitCode="year-text">2025</h1>

            <div classunitCode="sem-container">
              <p classunitCode="sem-text">Semester 1</p>
              <p classunitCode="sem-text">Semester 2</p>
            </div>
            
          </div>

          <div classunitCode="year-sem-container">
            <h1 classunitCode="year-text">2026</h1>

            <div classunitCode="sem-container">
              <p classunitCode="sem-text">Semester 1</p>
              <p classunitCode="sem-text">Semester 2</p>
            </div>
            
          </div>

        </div>

        <div>
      {boxList.map((unit, index) => (
        <Card
          key={index}
          unitTitle={unit.unitTitle}
          unitCode={unit.unitCode}
          creditPoints={unit.creditPoints}
          semesterOfferings={unit.semesterOfferings}
        />
      ))}
    </div>
      </div>
      
    );
  };

  return <div classunitCode="boxesGroup">{makeBoxes()}</div>;
};

export default App;
