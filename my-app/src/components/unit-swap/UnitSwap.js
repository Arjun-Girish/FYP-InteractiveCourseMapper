import React, { useState } from "react";
import "./UnitSwap.css";

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

  const swapBoxes = (fromBox, toBox) => {
    let boxes = boxList.slice();
    let fromIndex = boxes.findIndex((box) => box.id === fromBox.id) ?? -1;
    let toIndex = boxes.findIndex((box) => box.id === toBox.id) ?? -1;
    
    let fromSem = boxes[fromIndex].semester_status;
    let semName = boxes[fromIndex].name;
    let toSem = boxes[toIndex].semester_status;
    console.log(boxes[toIndex].box_id);


    if (fromSem != toSem){
      alert("ERROR: " + semName + " is not offered in this semester!")
    }

    if (fromIndex != -1 && toIndex != -1 && fromSem == toSem){
      let temp = boxes[fromIndex];
      boxes[fromIndex] = { ...boxes[toIndex], id: boxes[fromIndex].id };
      boxes[toIndex] = { ...temp, id: boxes[toIndex].id };
      setBoxList(boxes);
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

        {boxList.map((box, index) => (
          <div
            key={index}
            className="box"
            draggable={true}
            onDragStart={handleDragStart({ id: box.id })}
            onDragOver={handleDragOver({ id: box.id })}
            onDrop={handleDrop({ id: box.id })}
          >
            <div className="content">
              <div className="title-container">
                <div className="unit-code">{box.name}</div>
                <button className="unit-modal" onClick={()=>changeContent(box)}>ⓘ</button>

              </div>

              <div className="unit-title">{box.unitTitle}</div>

            </div>
          </div>

        ))}
        
        {popupToggle&&<div className="popup-container" onClick={changeContent}>
          <div className="popup-body" onClick={(e)=>e.stopPropagation()}> 
            <div className="popup-header">
              <button classaName="modal-close" onClick={changeContent}>x</button>              
                <div className="modal-popup-content">
                  {popupContent.map((box)=>{
                    return(
                      <div className="popup-card">
                        <h1> {box.name} </h1>
                        <p> {box.unitTitle} </p>
                        <p> Credit Points: {box.credit}</p>
                        <p> "This unit will help you to develop a systematic method of capturing design requirements, tools for ideation, estimation and decision-making. Primary and secondary manufacturing processes, assembly techniques. Engineering graphics for problem-solving, manufacturing communication and ideation. Report writing, teamwork in solving design problems involving the integration of mechanical elements in prototype conception, construction and testing."</p>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
          </div>}
        </div>
      </div>
      
    );
  };

  return <div className="boxesGroup">{makeBoxes()}</div>;
};

export default App;
