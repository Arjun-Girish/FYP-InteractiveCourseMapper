import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { PlusOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { connect} from "react-redux";
import { updateValue } from "../../store/actions";
import "./Main.css";
import {Link, useLocation} from "react-router-dom";
import { useHistory } from 'react-router-dom';



const Main = ({ updateValue, data, event }) => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState({});
  const showModal = (item) => {
    setIsModalOpen(true);
    setItem(item);
    console.log(isModalOpen);
  };

  const location = useLocation();
  const yearStart = Number(location.state.semesterStart)
  const vceUnits = location.state.userInfoPass
  console.log(vceUnits.vceUnitsMaths)

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const [show, setShow] = useState();



  const showConfirm = (e) => {
    e.stopPropagation(); //阻止原生事件冒泡
    Modal.confirm({
      title: "prerequisite required",
      icon: <ExclamationCircleOutlined />,
      content: "need prerequisite：...",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const checkDataOr = (data, event) => {
    for (let i = 0; i < event.prerequisiste.OR.length; i++) {
      const code = event.prerequisiste.OR[i];
      for (let j = 0; j < data.length; j++) {
        if (data[j].code === code) {
          return true;
        }
      }
    }
    return false;
  };
  
  const checkDataAND = (data, event) => {
    let andArr = event.prerequisiste.AND;
    let code = [];
    for (let j = 0; j < data.length; j++) {
      code.push(data[j].code);
    }
    for (let i = 0; i < andArr.length; i++) {
      if (!code.includes(andArr[i])) {
        return false;
      }
    }
    return true;
  };

  const courseCheck = (events,id) => {
    if(!events.prerequisiste) return false
    if (JSON.stringify(events) !== "{}") {
      // 计算上一组数据在数组中的起始位置和结束位置
      const end = Math.ceil((id * 1 + 1) / 8 - 1) * 8;
      const start = end - 8;
      if (id > 7) {
        let res = checkDataOr(data.slice(start, end), events);
        let res1 = checkDataAND(data.slice(start, end), events);
        console.log(!(res && res1));
        return !(res && res1)
      }
    }
  };

const vceNONEUnits = [
    {
      id: 1,
      box_id: 1,
      semester_status: 3,
      name: "ENG1012",
      credit: "6",
      unitTitle: "Engineering design",
      unitInfo: []
    },

    {
      id: 2,
      box_id: 2,
      semester_status: 3,
      name: "ENG1013",
      credit: "6",
      unitTitle: "Engineering smart systems",
      unitInfo: []
    },


    {
      id: 3,
      box_id: 3,
      semester_status: 3,
      name: "PHS1001",
      credit: "6",
      unitTitle: "Foundation Physics",
      unitInfo: []
    },

    {
      id: 4,
      box_id: 4,
      semester_status: 3,
      name: "ENG1090",
      credit: "6",
      unitTitle: "Foundation mathematics",
      unitInfo: []
    },

    {
      id: 5,
      box_id: 5,
      semester_status: 3,
      name: "ENG1011",
      credit: "6",
      unitTitle: "Engineering methods",
      unitInfo: []
    },

    {
      id: 6,
      box_id: 6,
      semester_status: 3,
      name: "ENG1005",
      credit: "6",
      unitTitle: "Engineering mathematics",
      unitInfo: []
    },
    
    {
      id: 7,
      box_id: 7,
      semester_status: 3,
      name: "ENG1014",
      credit: "6",
      unitTitle: "Engineering numerical analysis",
      unitInfo: []
    },

    {
      id: 8,
      box_id: 8,
      semester_status: 3,
      name: "Elective",
      credit: "6",
      unitTitle: "Elective",
      unitInfo: [],
    },
]

const vcePhysUnits = [
    {
      id: 1,
      box_id: 1,
      semester_status: 3,
      name: "ENG1012",
      credit: "6",
      unitTitle: "Engineering design",
      unitInfo: []
    },

    {
      id: 2,
      box_id: 2,
      semester_status: 3,
      name: "ENG1013",
      credit: "6",
      unitTitle: "Engineering smart systems",
      unitInfo: []
    },


    {
      id: 3,
      box_id: 3,
      semester_status: 3,
      name: "ENG1090",
      credit: "6",
      unitTitle: "Foundation mathematics",
      unitInfo: []
    },

    {
      id: 4,
      box_id: 4,
      semester_status: 3,
      name: "Elective",
      credit: "6",
      unitTitle: "Elective",
      unitInfo: []
    },

    {
      id: 5,
      box_id: 5,
      semester_status: 3,
      name: "ENG1011",
      credit: "6",
      unitTitle: "Engineering methods",
      unitInfo: []
    },

    {
      id: 6,
      box_id: 6,
      semester_status: 3,
      name: "ENG1005",
      credit: "6",
      unitTitle: "Engineering mathematics",
      unitInfo: []
    },
    
    {
      id: 7,
      box_id: 7,
      semester_status: 3,
      name: "ENG1014",
      credit: "6",
      unitTitle: "Engineering numerical analysis",
      unitInfo: []
    },

    {
      id: 8,
      box_id: 8,
      semester_status: 3,
      name: "Elective",
      credit: "6",
      unitTitle: "Elective",
      unitInfo: [],
    },
]

const vceMathsUnits = [
  {
    id: 1,
    box_id: 1,
    semester_status: 3,
    name: "ENG1005",
    credit: "6",
    unitTitle: "Engineering mathematics",
    unitInfo: []
  },

  {
    id: 2,
    box_id: 2,
    semester_status: 3,
    name: "ENG1013",
    credit: "6",
    unitTitle: "Engineering smart systems",
    unitInfo: []
  },


  {
    id: 3,
    box_id: 3,
    semester_status: 3,
    name: "PHS1001",
    credit: "6",
    unitTitle: "Foundation physics",
    unitInfo: []
  },

  {
    id: 4,
    box_id: 4,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 5,
    box_id: 5,
    semester_status: 3,
    name: "ENG1011",
    credit: "6",
    unitTitle: "Engineering methods",
    unitInfo: []
  },

  {
    id: 6,
    box_id: 6,
    semester_status: 3,
    name: "ENG1012",
    credit: "6",
    unitTitle: "Engineering design",
    unitInfo: []
  },
  
  {
    id: 7,
    box_id: 7,
    semester_status: 3,
    name: "ENG1014",
    credit: "6",
    unitTitle: "Engineering numerical analysis",
    unitInfo: []
  },

  {
    id: 8,
    box_id: 8,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: [],
  },
]

const vceALLUnits = [
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
    unitTitle: "Engineering mathematics",
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
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 5,
    box_id: 5,
    semester_status: 3,
    name: "ENG1011",
    credit: "6",
    unitTitle: "Engineering methods",
    unitInfo: []
  },

  {
    id: 6,
    box_id: 6,
    semester_status: 3,
    name: "ENG1012",
    credit: "6",
    unitTitle: "Engineering design",
    unitInfo: []
  },
  
  {
    id: 7,
    box_id: 7,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 8,
    box_id: 8,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: [],
  },
]




  useEffect(() => {
    updateValue(event.id, event);
  },[event]);

  return (
    <div className="main-container">
      

    <div className="home-container">
    
      <div className="hometop">Specialisation: {location.state.major}</div>

      
        <div className="home">
        
        <div className="homemain">
          <div>
            <div>{yearStart}</div>
            <div className="homecon">
              <div>
                <div>Semester 1</div>
                <div>Semester 2</div>
              </div>
              <div className="cardF">
                
                {/* IF STUDENT HAS NOT COMPLETED VCE SPECIALIST MATHS OR PHYISCS */ }
                {vceNONEUnits.slice(0, 8).map((item, index) => {
                  if (vceUnits.vceUnitsMaths === null && vceUnits.vceUnitsPhysics === null )

                  if (item.id == "8")

                  return (
                    <div key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <div style={{ fontSize: "5px" }}><h1>First Year technical elective</h1></div>
                    <PlusOutlined></PlusOutlined>
                  </div>
                  )

                  else return(
                    <div key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <PlusOutlined></PlusOutlined>
                  </div>
                  )
                })}

                {/* IF STUDENT HAS NOT COMPLETED VCE SPECIALIST MATHS BUT COMPLETED PHYISCS */ }
                {vcePhysUnits.slice(0, 8).map((item, index) => {
                  if (vceUnits.vceUnitsMaths === null && vceUnits.vceUnitsPhysics)

                  if (item.id == "4")

                  return (
                    <div key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <div style={{ fontSize: "5px" }}><h1>First Year technical elective</h1></div>
                    <PlusOutlined></PlusOutlined>
                  </div>
                  )

                  else if (item.id == "8")

                  return (
                    <div key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <div style={{ fontSize: "5px" }}><h1>Elective</h1></div>
                    <PlusOutlined></PlusOutlined>
                  </div>
                  )

                  else return(
                    <div key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <PlusOutlined></PlusOutlined>
                  </div>
                  )
                })}

              {/* IF STUDENT HAS COMPLETED VCE SPECIALIST MATHS BUT NOTPHYISCS */ }
              {vceMathsUnits.slice(0, 8).map((item, index) => {
                  if (vceUnits.vceUnitsMaths && vceUnits.vceUnitsPhysics === null )

                  if (item.id == "4")

                  return (
                    <div key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <div style={{ fontSize: "5px" }}><h1>First Year technical elective</h1></div>
                    <PlusOutlined></PlusOutlined>
                  </div>
                  )

                  else if (item.id == "8")

                  return (
                    <div key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <div style={{ fontSize: "5px" }}><h1>Elective</h1></div>
                    <PlusOutlined></PlusOutlined>
                  </div>
                  )

                  else return(
                    <div key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <PlusOutlined></PlusOutlined>
                  </div>
                  )
                })}


           {/* IF STUDENT HAS COMPLETED BOTH VCE SPECIALIST MATHS & PHYISCS */ }
           {vceALLUnits.slice(0, 8).map((item, index) => {
                  if (vceUnits.vceUnitsMaths && vceUnits.vceUnitsPhysics )

                  if (item.id == "4")

                  return (
                    <div key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <div style={{ fontSize: "5px" }}><h1>First Year technical elective</h1></div>
                    <PlusOutlined></PlusOutlined>
                  </div>
                  )

                  else if (item.id == "8" || item.id == "7")

                  return (
                    <div key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <div style={{ fontSize: "5px" }}><h1>Elective</h1></div>
                    <PlusOutlined></PlusOutlined>
                  </div>
                  )

                  else return(
                    <div key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <PlusOutlined></PlusOutlined>
                  </div>
                  )
                })}

              </div>
            </div>
          </div>
          <div>
            <div>{yearStart+1}</div>
            <div className="homecon">
              <div>
                <div>Semester 1</div>
                <div>Semester 2</div>
              </div>
              <div className="cardF">
                   
              {data.slice(8, 16).map((item, index) => {

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>

                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div
                      key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >

                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

            


              </div>
            </div>
          </div>
          <div>
            <div>{yearStart+2}</div>
            <div className="homecon">
              <div>
                <div>Semester 1</div>
                <div>Semester 2</div>
              </div>
              <div className="cardF">
    
              {data.slice(16, 24).map((item, index) => {

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>

                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div
                      key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

       


              </div>
            </div>
          </div>
          <div>
            <div>{yearStart+3}</div>
            <div className="homecon">
              
              <div>
                <div>Semester 1</div>
                <div>Semester 2</div>
              </div>
              <div className="cardF">
                  
              {data.slice(24, 32).map((item, index) => {

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>

                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div
                      key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >

                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

          




                
              </div>
            </div>
            
          </div>

          <div>
            
       

            
          </div>

          <button className = "add-button" onClick={() => setShow(true)}>
            {show ? "Add Year" : "Add Year"}
          </button>

        {
        show && <div className="new-year">
          
            
          <div>{yearStart+4}</div>
          <div className="homecon">
            <div>
              <div>Semester 1</div>
              <div>Semester 2</div>
            </div>
            <div className="cardF">

              {data.slice(0, 8).map((item, index) => {

                return item.id ? (

                  <div key={index} onClick={() => showModal(item)}>
                      <div className = "unit-code">{item.code}</div>
                  </div>
                ) : (
                  <div
                    key={index + new Date()}
                    onClick={() => history(`/search/${index}`)}
                  >
                    <PlusOutlined></PlusOutlined>
                  </div>
                );
              })}
            </div>
          </div>



          </div>}

        </div>

        <Modal
          title={item.code}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[]}
          width={800}
        >
          <Card title={"i"} item={item}></Card>
        </Modal>
      </div>

      <div className = "bottom-div">
        
        <button className="back-button-main" onClick={() => history(-1)}>Back</button>

        <div className="legend-container">

          <div className="legend-pass"></div>
          <h1 className = "legend-text"> Passed </h1>

          <div className="legend-fail"></div>
          <h1 className = "legend-text"> Failed </h1>

          <div className="legend-in-progress"></div>
          <h1 className = "legend-text"> In-Progress </h1>

          <div className="legend-upcoming"></div>
          <h1 className = "legend-text"> Upcoming </h1>
        </div>

          <button type ="submit" className="submit-button-main" onClick={() => history('/export')}> Submit </button>
          
      </div>
    </div>
    </div>
  );
};

export default connect(
  (state) => ({ data: state.data, event: state.event }), //映射状态
  { updateValue } //映射操作状态的方法
)(Main);
