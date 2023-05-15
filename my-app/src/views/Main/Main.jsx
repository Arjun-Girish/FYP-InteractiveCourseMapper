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
  const degree = location.state.major

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
const aeroUnits = [
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
]

const bioUnits = [
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
    name: "BMS1021",
    credit: "6",
    unitTitle: "Cells, tissues and organisms",
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
    name: "ECE2071",
    credit: "6",
    unitTitle: "Computer organisation and programming",
    unitInfo: []
  },

        
  {
    id: 10,
    box_id: 10,
    semester_status: 1,
    name: "PHY2011",
    credit: "6",
    unitTitle: "Neuroscience of communication",
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
    name: "MCB2011",
    credit: "6",
    unitTitle: "Molecular biology",
    unitInfo: []
  },

  {
    id: 13,
    box_id: 13,
    semester_status: 2,
    name: "ECE2111",
    credit: "6",
    unitTitle: "Signals and systems",
    unitInfo: []
  },

  {
    id: 14,
    box_id: 14,
    semester_status: 2,
    name: "CHE2161",
    credit: "6",
    unitTitle: "Mechanics of fluids",
    unitInfo: []
  },

  
  {
    id: 15,
    box_id: 15,
    semester_status: 2,
    name: "PHY2042",
    credit: "6",
    unitTitle: "Human Physiology",
    unitInfo: []
  },

  {
    id: 16,
    box_id: 16,
    semester_status: 3,
    name: "MCB2022",
    credit: "6",
    unitTitle: "The dynamic cell",
    unitInfo: []
  },

  {
    id: 17,
    box_id: 17,
    semester_status: 1,
    name: "ECE2131",
    credit: "6",
    unitTitle: "Electrical circuits",
    unitInfo: []
  },

  {
    id: 18,
    box_id: 18,
    semester_tsatus: 1,
    name: "MEC3601",
    credit: "6",
    unitTitle: "Mechanics for biomedical engineering",
    unitInfo: []
  },

  {
    id: 19,
    box_id: 19,
    semester_status: 1,
    name: "MTE3204",
    credit: "6",
    unitTitle: "Biomaterials 1",
    unitInfo: []
  },

  {
    id: 20,
    box_id: 20,
    semester_status: 3,
    name: "DEV2011",
    credit: "6",
    unitTitle: "Early human development",
    unitInfo: []
  },

  {
    id: 21,
    box_id: 21,
    semester_status: 2,
    name: "ECE4179",
    credit: "6",
    unitTitle: "Neural netowrks and deep learning",
    unitInfo: []
  },

  {
    id: 22,
    box_id: 22,
    semester_status: 2,
    name: "ECE4087",
    credit: "6",
    unitTitle: "Medical technology Innovation",
    unitInfo: []
  },

  
  {
    id: 23,
    box_id: 23,
    semester_status: 2,
    name: "MEC3602",
    credit: "6",
    unitTitle: "Biomedical microsystems",
    unitInfo: []
  },

  {
    id: 24,
    box_id: 24,
    semester_status: 3,
    name: "DEV2022",
    credit: "6",
    unitTitle: "Human anatomy and development",
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
    name: "MEC4601",
    credit: "6",
    unitTitle: "Implantable devices",
    unitInfo: []
  },

  {
    id: 27,
    box_id: 27,
    semester_status: 1,
    name: "TRC3500",
    credit: "6",
    unitTitle: "Sensors and artifical perception",
    unitInfo: []
  },

  
  {
    id: 28,
    box_id: 28,
    semester_status: 3,
    name: "ENG3111",
    credit: "6",
    unitTitle: "Sensory and cognitive neuroscience",
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
    name: "ENG4105",
    credit: "6",
    unitTitle: "Biomedical engineering",
    unitInfo: []
  },

  {
    id: 31,
    box_id: 31,
    semester_status: 2,
    name: "MEC4404",
    credit: "6",
    unitTitle: "Professional practice",
    unitInfo: []
  },

  {
    id: 32,
    box_id: 32,
    semester_status:3,
    name: "ECE4081",
    credit: "6",
    unitTitle: "Medical Instrumentation",
    unitInfo: []
  },
]

const chemUnits = [
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
    name: "ENG2005",
    credit: "6",
    unitTitle: "Advanced engineering mathematics",
    unitInfo: []
  },

        
  {
    id: 10,
    box_id: 10,
    semester_status: 1,
    name: "CHM1011",
    credit: "6",
    unitTitle: "Chemistry1",
    unitInfo: []
  },

  
  {
    id: 11,
    box_id: 11,
    semester_status: 3,
    name: "CHE2164",
    credit: "6",
    unitTitle: "Thermodynamics 1",
    unitInfo: []
  },

  {
    id: 12,
    box_id: 12,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 13,
    box_id: 13,
    semester_status: 2,
    name: "CHE2162",
    credit: "6",
    unitTitle: "Materials and energy balances",
    unitInfo: []
  },

  {
    id: 14,
    box_id: 14,
    semester_status: 2,
    name: "CHE2161",
    credit: "6",
    unitTitle: "Mechanics of fluids",
    unitInfo: []
  },

  
  {
    id: 15,
    box_id: 15,
    semester_status: 2,
    name: "CHE2163",
    credit: "6",
    unitTitle: "Heat and mass transfer",
    unitInfo: []
  },

  {
    id: 16,
    box_id: 16,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 17,
    box_id: 17,
    semester_status: 1,
    name: "CHE3161",
    credit: "6",
    unitTitle: "Chemistry and chemical thermodynamics",
    unitInfo: []
  },

  {
    id: 18,
    box_id: 18,
    semester_tsatus: 1,
    name: "CHE3165",
    credit: "6",
    unitTitle: "Separation processes",
    unitInfo: []
  },

  {
    id: 19,
    box_id: 19,
    semester_status: 1,
    name: "CHE3167",
    credit: "6",
    unitTitle: "Transport phenomena and numerical methods",
    unitInfo: []
  },

  {
    id: 20,
    box_id: 20,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 21,
    box_id: 21,
    semester_status: 2,
    name: "CHE3162",
    credit: "6",
    unitTitle: "Process control",
    unitInfo: []
  },

  {
    id: 22,
    box_id: 22,
    semester_status: 2,
    name: "CHE3164",
    credit: "6",
    unitTitle: "Reaction engineering",
    unitInfo: []
  },

  
  {
    id: 23,
    box_id: 23,
    semester_status: 2,
    name: "CHE3166",
    credit: "6",
    unitTitle: "Process design",
    unitInfo: []
  },

  {
    id: 24,
    box_id: 24,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "CHE4162",
    credit: "6",
    unitTitle: "Particle technology",
    unitInfo: []
  },

  {
    id: 27,
    box_id: 27,
    semester_status: 1,
    name: "CHE4161",
    credit: "6",
    unitTitle: "Engineer in society",
    unitInfo: []
  },

  
  {
    id: 28,
    box_id: 28,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "CHE4170",
    credit: "6",
    unitTitle: "Design Project",
    unitInfo: []
  },

  {
    id: 31,
    box_id: 31,
    semester_status: 2,
    name: "CHE4170",
    credit: "6",
    unitTitle: "Design Project",
    unitInfo: []
  },

  {
    id: 32,
    box_id: 32,
    semester_status:3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },
]


const electricalUnits = [
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
    name: "ECE2071",
    credit: "6",
    unitTitle: "Computer organisation and programming",
    unitInfo: []
  },

        
  {
    id: 10,
    box_id: 10,
    semester_status: 1,
    name: "ECE2131",
    credit: "6",
    unitTitle: "Electrical circuits",
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
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 13,
    box_id: 13,
    semester_status: 2,
    name: "ECE2072",
    credit: "6",
    unitTitle: "Digital systems",
    unitInfo: []
  },

  {
    id: 14,
    box_id: 14,
    semester_status: 2,
    name: "ECE2111",
    credit: "6",
    unitTitle: "Signals and systems",
    unitInfo: []
  },

  
  {
    id: 15,
    box_id: 15,
    semester_status: 2,
    name: "ECE2191",
    credit: "6",
    unitTitle: "Probability models in engineering",
    unitInfo: []
  },

  {
    id: 16,
    box_id: 16,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 17,
    box_id: 17,
    semester_status: 1,
    name: "ECE3073",
    credit: "6",
    unitTitle: "Computer systems",
    unitInfo: []
  },

  {
    id: 18,
    box_id: 18,
    semester_tsatus: 1,
    name: "ECE3141",
    credit: "6",
    unitTitle: "Information and networks",
    unitInfo: []
  },

  {
    id: 19,
    box_id: 19,
    semester_status: 1,
    name: "ECE3161",
    credit: "6",
    unitTitle: "Analogue electronics",
    unitInfo: []
  },

  {
    id: 20,
    box_id: 20,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 21,
    box_id: 21,
    semester_status: 2,
    name: "ECE4132",
    credit: "6",
    unitTitle: "Control system design",
    unitInfo: []
  },

  {
    id: 22,
    box_id: 22,
    semester_status: 2,
    name: "ECE3121",
    credit: "6",
    unitTitle: "Engineering electromagnetics",
    unitInfo: []
  },

  
  {
    id: 23,
    box_id: 23,
    semester_status: 2,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 24,
    box_id: 24,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "ENG3051",
    credit: "6",
    unitTitle: "Electrical energy systems",
    unitInfo: []
  },

  {
    id: 27,
    box_id: 27,
    semester_status: 1,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  
  {
    id: 28,
    box_id: 28,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "ECE4191",
    credit: "6",
    unitTitle: "Engineering integrated design",
    unitInfo: []
  },

  {
    id: 31,
    box_id: 31,
    semester_status: 2,
    name: "ECE4099",
    credit: "6",
    unitTitle: "Professional practice",
    unitInfo: []
  },

  {
    id: 32,
    box_id: 32,
    semester_status:3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },
]

const envUnits = [
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
    name: "ENE2021",
    credit: "6",
    unitTitle: "Energy and the environment",
    unitInfo: []
  },

        
  {
    id: 10,
    box_id: 10,
    semester_status: 1,
    name: "CHE2164",
    credit: "6",
    unitTitle: "Thermodynamics 1",
    unitInfo: []
  },

  
  {
    id: 11,
    box_id: 11,
    semester_status: 3,
    name: "CIV2263",
    credit: "6",
    unitTitle: "Water systems",
    unitInfo: []
  },

  {
    id: 12,
    box_id: 12,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 13,
    box_id: 13,
    semester_status: 2,
    name: "CHE2162",
    credit: "6",
    unitTitle: "Materials and energy balances",
    unitInfo: []
  },

  {
    id: 14,
    box_id: 14,
    semester_status: 2,
    name: "ENG2005",
    credit: "6",
    unitTitle: "Advanced engineering mathematics",
    unitInfo: []
  },

  
  {
    id: 15,
    box_id: 15,
    semester_status: 2,
    name: "ENE2503",
    credit: "6",
    unitTitle: "Material properties and recycling",
    unitInfo: []
  },

  {
    id: 16,
    box_id: 16,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 17,
    box_id: 17,
    semester_status: 1,
    name: "CIV3248",
    credit: "6",
    unitTitle: "Groundwater and environmental geomechanics",
    unitInfo: []
  },

  {
    id: 18,
    box_id: 18,
    semester_tsatus: 1,
    name: "CIV3285",
    credit: "6",
    unitTitle: "Engineering hydrology",
    unitInfo: []
  },

  {
    id: 19,
    box_id: 19,
    semester_status: 1,
    name: "BTX3100",
    credit: "6",
    unitTitle: "Sustainability regulation for business",
    unitInfo: []
  },

  {
    id: 20,
    box_id: 20,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 21,
    box_id: 21,
    semester_status: 2,
    name: "ENE3606",
    credit: "6",
    unitTitle: "The air environment",
    unitInfo: []
  },

  {
    id: 22,
    box_id: 22,
    semester_status: 2,
    name: "ENE3032",
    credit: "6",
    unitTitle: "Fate and transport of contaminants",
    unitInfo: []
  },

  
  {
    id: 23,
    box_id: 23,
    semester_status: 2,
    name: "ENE3031",
    credit: "6",
    unitTitle: "Building sustainability",
    unitInfo: []
  },

  {
    id: 24,
    box_id: 24,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "CIV4286",
    credit: "6",
    unitTitle: "Project managemnet for civil engineers",
    unitInfo: []
  },

  {
    id: 27,
    box_id: 27,
    semester_status: 1,
    name: "ENE4042",
    credit: "6",
    unitTitle: "Environmental impact and risk assessment",
    unitInfo: []
  },

  
  {
    id: 28,
    box_id: 28,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "CIV4212",
    credit: "6",
    unitTitle: "Civil and environmental engineering practice",
    unitInfo: []
  },

  {
    id: 31,
    box_id: 31,
    semester_status: 2,
    name: "ENE4011",
    credit: "6",
    unitTitle: "Soil remediation and solid waste management",
    unitInfo: []
  },

  {
    id: 32,
    box_id: 32,
    semester_status:3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },
]

const materialsUnits = [
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
    name: "MTE2101",
    credit: "6",
    unitTitle: "Automaic-scale structure of materials",
    unitInfo: []
  },

        
  {
    id: 10,
    box_id: 10,
    semester_status: 1,
    name: "MTE2102",
    credit: "6",
    unitTitle: "Phase equilibria and phase transformations",
    unitInfo: []
  },

  
  {
    id: 11,
    box_id: 11,
    semester_status: 3,
    name: "MTE2103",
    credit: "6",
    unitTitle: "Mechanical properties of materials",
    unitInfo: []
  },

  {
    id: 12,
    box_id: 12,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 13,
    box_id: 13,
    semester_status: 2,
    name: "MTE2202",
    credit: "6",
    unitTitle: "Functional materials 1",
    unitInfo: []
  },

  {
    id: 14,
    box_id: 14,
    semester_status: 2,
    name: "MTE2201",
    credit: "6",
    unitTitle: "Polymers",
    unitInfo: []
  },

  
  {
    id: 15,
    box_id: 15,
    semester_status: 2,
    name: "ENG2005",
    credit: "6",
    unitTitle: "Advanced engineering mathematics",
    unitInfo: []
  },

  {
    id: 16,
    box_id: 16,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 17,
    box_id: 17,
    semester_status: 1,
    name: "MTE3103",
    credit: "6",
    unitTitle: "Materials life cycle",
    unitInfo: []
  },

  {
    id: 18,
    box_id: 18,
    semester_tsatus: 1,
    name: "MTE3102",
    credit: "6",
    unitTitle: "Plasticity of metals and alloys",
    unitInfo: []
  },

  {
    id: 19,
    box_id: 19,
    semester_status: 1,
    name: "MTE3101",
    credit: "6",
    unitTitle: "Sustainability regulation for business",
    unitInfo: []
  },

  {
    id: 20,
    box_id: 20,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 21,
    box_id: 21,
    semester_status: 2,
    name: "MTE3202",
    credit: "6",
    unitTitle: "Functional materials 2",
    unitInfo: []
  },

  {
    id: 22,
    box_id: 22,
    semester_status: 2,
    name: "MTE3203",
    credit: "6",
    unitTitle: "Introduction toceramics: Properties, processingand applications",
    unitInfo: []
  },

  
  {
    id: 23,
    box_id: 23,
    semester_status: 2,
    name: "MTE3201",
    credit: "6",
    unitTitle: "Materials in a complex world 2: Characterisation, identification and selection",
    unitInfo: []
  },

  {
    id: 24,
    box_id: 24,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "MTE4102",
    credit: "6",
    unitTitle: "Advanced materials processing and manufacturing",
    unitInfo: []
  },

  {
    id: 27,
    box_id: 27,
    semester_status: 1,
    name: "MTE4101",
    credit: "6",
    unitTitle: "Integrated design project",
    unitInfo: []
  },

  
  {
    id: 28,
    box_id: 28,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 31,
    box_id: 31,
    semester_status: 2,
    name: "MTE4201",
    credit: "6",
    unitTitle: "Materials in a complex world 3: Impact in society",
    unitInfo: []
  },

  {
    id: 32,
    box_id: 32,
    semester_status:3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },
]

const mechanicalUnits = [
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
    name: "MEC4203",
    credit: "6",
    unitTitle: "Mechanics of materials",
    unitInfo: []
  },

        
  {
    id: 10,
    box_id: 10,
    semester_status: 1,
    name: "MEC2401",
    credit: "6",
    unitTitle: "Dynamics 1",
    unitInfo: []
  },

  
  {
    id: 11,
    box_id: 11,
    semester_status: 3,
    name: "MEC2402",
    credit: "6",
    unitTitle: "Design methods",
    unitInfo: []
  },

  {
    id: 12,
    box_id: 12,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 13,
    box_id: 13,
    semester_status: 2,
    name: "ENG2005",
    credit: "6",
    unitTitle: "Advanced engineering mathematics",
    unitInfo: []
  },

  {
    id: 14,
    box_id: 14,
    semester_status: 2,
    name: "MEC2402",
    credit: "6",
    unitTitle: "Mechanics of fluids",
    unitInfo: []
  },

  
  {
    id: 15,
    box_id: 15,
    semester_status: 2,
    name: "MEC2405",
    credit: "6",
    unitTitle: "Thermodynamics",
    unitInfo: []
  },

  {
    id: 16,
    box_id: 16,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 17,
    box_id: 17,
    semester_status: 1,
    name: "MEC3455",
    credit: "6",
    unitTitle: "Solid mechanics",
    unitInfo: []
  },

  {
    id: 18,
    box_id: 18,
    semester_tsatus: 1,
    name: "MEC3451",
    credit: "6",
    unitTitle: "Fluid mechanics 2",
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
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 21,
    box_id: 21,
    semester_status: 2,
    name: "MEC3453",
    credit: "6",
    unitTitle: "Dynamics 2",
    unitInfo: []
  },

  {
    id: 22,
    box_id: 22,
    semester_status: 2,
    name: "MEC3416",
    credit: "6",
    unitTitle: "Machine design",
    unitInfo: []
  },

  
  {
    id: 23,
    box_id: 23,
    semester_status: 2,
    name: "MEC3457",
    credit: "6",
    unitTitle: "Systems and control",
    unitInfo: []
  },

  {
    id: 24,
    box_id: 24,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "MEC4404",
    credit: "6",
    unitTitle: "Professional practice",
    unitInfo: []
  },

  {
    id: 27,
    box_id: 27,
    semester_status: 1,
    name: "MEC4408",
    credit: "6",
    unitTitle: "Thermodynamics and heat transfer",
    unitInfo: []
  },

  
  {
    id: 28,
    box_id: 28,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "MEC4407",
    credit: "6",
    unitTitle: "Design project",
    unitInfo: []
  },

  {
    id: 31,
    box_id: 31,
    semester_status: 2,
    name: "MEC4426",
    credit: "6",
    unitTitle: "Computer-aided design",
    unitInfo: []
  },

  {
    id: 32,
    box_id: 32,
    semester_status:3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },
]

const mechatronicsAIUnits = [
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
    name: "ECE2131",
    credit: "6",
    unitTitle: "Electrical circuits",
    unitInfo: []
  },

        
  {
    id: 10,
    box_id: 10,
    semester_status: 1,
    name: "MEC2402",
    credit: "6",
    unitTitle: "Design methods",
    unitInfo: []
  },

  
  {
    id: 11,
    box_id: 11,
    semester_status: 3,
    name: "ECE2071",
    credit: "6",
    unitTitle: "Computer organisation and programming",
    unitInfo: []
  },

  {
    id: 12,
    box_id: 12,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 13,
    box_id: 13,
    semester_status: 2,
    name: "ENG2005",
    credit: "6",
    unitTitle: "Advanced engineering mathematics",
    unitInfo: []
  },

  {
    id: 14,
    box_id: 14,
    semester_status: 2,
    name: "TRC2201",
    credit: "6",
    unitTitle: "Mechanics",
    unitInfo: []
  },

  
  {
    id: 15,
    box_id: 15,
    semester_status: 2,
    name: "ECE2072",
    credit: "6",
    unitTitle: "Digital systems",
    unitInfo: []
  },

  {
    id: 16,
    box_id: 16,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 17,
    box_id: 17,
    semester_status: 1,
    name: "ECE3161",
    credit: "6",
    unitTitle: "Analogue electronics",
    unitInfo: []
  },

  {
    id: 18,
    box_id: 18,
    semester_tsatus: 1,
    name: "TRC3200",
    credit: "6",
    unitTitle: "Dynamical systems",
    unitInfo: []
  },

  {
    id: 19,
    box_id: 19,
    semester_status: 1,
    name: "TRC3500",
    credit: "6",
    unitTitle: "Sensors and artificial perception",
    unitInfo: []
  },

  {
    id: 20,
    box_id: 20,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 21,
    box_id: 21,
    semester_status: 2,
    name: "TRC3600",
    credit: "6",
    unitTitle: "Modelling and control",
    unitInfo: []
  },

  {
    id: 22,
    box_id: 22,
    semester_status: 2,
    name: "ECE4078",
    credit: "6",
    unitTitle: "Intelligent robotics",
    unitInfo: []
  },

  
  {
    id: 23,
    box_id: 23,
    semester_status: 2,
    name: "ECE4179",
    credit: "6",
    unitTitle: "Neural networks and deep learning",
    unitInfo: []
  },

  {
    id: 24,
    box_id: 24,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "TRC4800",
    credit: "6",
    unitTitle: "Robotics",
    unitInfo: []
  },

  {
    id: 27,
    box_id: 27,
    semester_status: 1,
    name: "ECE4076",
    credit: "6",
    unitTitle: "Comptuer vision",
    unitInfo: []
  },

  
  {
    id: 28,
    box_id: 28,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "TRC4002",
    credit: "6",
    unitTitle: "Professional practice",
    unitInfo: []
  },

  {
    id: 31,
    box_id: 31,
    semester_status: 2,
    name: "ECE4179",
    credit: "6",
    unitTitle: "Engineering integrated design",
    unitInfo: []
  },

  {
    id: 32,
    box_id: 32,
    semester_status:3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },
]

const civilUnits = [
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
    name: "CIV2206",
    credit: "6",
    unitTitle: "Structural mechanics",
    unitInfo: []
  },

        
  {
    id: 10,
    box_id: 10,
    semester_status: 1,
    name: "CIV2282",
    credit: "6",
    unitTitle: "Transport and traffic engineering",
    unitInfo: []
  },

  
  {
    id: 11,
    box_id: 11,
    semester_status: 3,
    name: "CIV2263",
    credit: "6",
    unitTitle: "Water systems",
    unitInfo: []
  },

  {
    id: 12,
    box_id: 12,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 13,
    box_id: 13,
    semester_status: 2,
    name: "ENG2005",
    credit: "6",
    unitTitle: "Advanced engineering mathematics",
    unitInfo: []
  },

  {
    id: 14,
    box_id: 14,
    semester_status: 2,
    name: "CIV2242",
    credit: "6",
    unitTitle: "Geomechanics 1",
    unitInfo: []
  },

  
  {
    id: 15,
    box_id: 15,
    semester_status: 2,
    name: "CIV2235",
    credit: "6",
    unitTitle: "Structural materials",
    unitInfo: []
  },

  {
    id: 16,
    box_id: 16,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 17,
    box_id: 17,
    semester_status: 1,
    name: "CIV4286",
    credit: "6",
    unitTitle: "Project management for civil engineers",
    unitInfo: []
  },

  {
    id: 18,
    box_id: 18,
    semester_tsatus: 1,
    name: "CUV3294",
    credit: "6",
    unitTitle: "Structural design",
    unitInfo: []
  },

  {
    id: 19,
    box_id: 19,
    semester_status: 1,
    name: "CIV3285",
    credit: "6",
    unitTitle: "Engineering hydrology",
    unitInfo: []
  },

  {
    id: 20,
    box_id: 20,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },

  {
    id: 21,
    box_id: 21,
    semester_status: 2,
    name: "CIV3283",
    credit: "6",
    unitTitle: "Road engineering",
    unitInfo: []
  },

  {
    id: 22,
    box_id: 22,
    semester_status: 2,
    name: "CIV3221",
    credit: "6",
    unitTitle: "Building structures and technology",
    unitInfo: []
  },

  
  {
    id: 23,
    box_id: 23,
    semester_status: 2,
    name: "CIV3247",
    credit: "6",
    unitTitle: "Geomechanics 2",
    unitInfo: []
  },

  {
    id: 24,
    box_id: 24,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "CIV4249",
    credit: "6",
    unitTitle: "Foundation engineering",
    unitInfo: []
  },

  {
    id: 27,
    box_id: 27,
    semester_status: 1,
    name: "CIV4280",
    credit: "6",
    unitTitle: "Bridge design and assesment",
    unitInfo: []
  },

  
  {
    id: 28,
    box_id: 28,
    semester_status: 3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
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
    name: "CIV4121",
    credit: "6",
    unitTitle: "Civil and environmental engineering practice",
    unitInfo: []
  },

  {
    id: 31,
    box_id: 31,
    semester_status: 2,
    name: "CIV4288",
    credit: "6",
    unitTitle: "Water treatment",
    unitInfo: []
  },

  {
    id: 32,
    box_id: 32,
    semester_status:3,
    name: "Elective",
    credit: "6",
    unitTitle: "Elective",
    unitInfo: []
  },
]


  useEffect(() => {
    updateValue(event.id, event);
  },[event]);

  return (
    <div className="main-container">
      
      <button className="back-button-main" onClick={() => history(-1)}>Back</button>


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

                
                {aeroUnits.slice(0, 8).map((item, index) => {
                  if (degree === "Aerospace Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                 {bioUnits.slice(0, 8).map((item, index) => {
                  if (degree === "Biomedical Engineering")
                  
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

                     {chemUnits.slice(0, 8).map((item, index) => {
                  if (degree === "Chemical Engineering")
                  
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

                  {electricalUnits.slice(0, 8).map((item, index) => {
                  if (degree === "Electrical Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                  {envUnits.slice(0, 8).map((item, index) => {
                  if (degree === "Environmental Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                 {materialsUnits.slice(0, 8).map((item, index) => {
                  if (degree === "Materials Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                   {mechanicalUnits.slice(0, 8).map((item, index) => {
                  if (degree === "Mechanical Engineering")
                  
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

                  {mechatronicsAIUnits.slice(0, 8).map((item, index) => {
                  if (degree === "Robotics & Mechatronics Engineering")
                  
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
                
                {civilUnits.slice(0, 8).map((item, index) => {
                  if (degree === "Civil Engineering")
                  
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
            <div>{yearStart+1}</div>
            <div className="homecon">
              <div>
                <div>Semester 1</div>
                <div>Semester 2</div>
              </div>
              <div className="cardF">
                   
              {aeroUnits.slice(8, 16).map((item, index) => {
                  if (degree === "Aerospace Engineering")

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
                                      <h1> asd</h1>

                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                 {bioUnits.slice(8, 16).map((item, index) => {
                  if (degree === "Biomedical Engineering")
                  
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
                                      <h1> asd</h1>

                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                     {chemUnits.slice(8, 16).map((item, index) => {
                  if (degree === "Chemical Engineering")
                  
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

                 {electricalUnits.slice(8, 16).map((item, index) => {
                  if (degree === "Electrical Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                 {envUnits.slice(8, 16).map((item, index) => {
                  if (degree === "Environmental Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                  {materialsUnits.slice(8, 16).map((item, index) => {
                  if (degree === "Materials Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                
                   {mechanicalUnits.slice(8, 16).map((item, index) => {
                  if (degree === "Mechanical Engineering")
                  
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

                  {mechatronicsAIUnits.slice(8, 16).map((item, index) => {
                  if (degree === "Robotics & Mechatronics Engineering")
                  
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

                     {civilUnits.slice(8, 16).map((item, index) => {
                  if (degree === "Civil Engineering")
                  
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
    
              {aeroUnits.slice(16, 24).map((item, index) => {
                  if (degree === "Aerospace Engineering")

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
                                      <h1> asd</h1>

                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                 {bioUnits.slice(16, 24).map((item, index) => {
                  if (degree === "Biomedical Engineering")
                  
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
                                      <h1> asd</h1>

                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                
                     {chemUnits.slice(16, 24).map((item, index) => {
                  if (degree === "Chemical Engineering")
                  
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

                 {electricalUnits.slice(16, 24).map((item, index) => {
                  if (degree === "Electrical Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                 {envUnits.slice(16, 24).map((item, index) => {
                  if (degree === "Environmental Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                  {materialsUnits.slice(16, 24).map((item, index) => {
                  if (degree === "Materials Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                
                   {mechanicalUnits.slice(16, 24).map((item, index) => {
                  if (degree === "Mechanical Engineering")
                  
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

                  {mechatronicsAIUnits.slice(16, 24).map((item, index) => {
                  if (degree === "Robotics & Mechatronics Engineering")
                  
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

                     {civilUnits.slice(16,24).map((item, index) => {
                  if (degree === "Civil Engineering")
                  
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
                  
              {aeroUnits.slice(24, 32).map((item, index) => {
                  if (degree === "Aerospace Engineering")

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

                 {bioUnits.slice(24, 32).map((item, index) => {
                  if (degree === "Biomedical Engineering")
                  
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
                                      <h1> asd</h1>

                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}


                     {chemUnits.slice(24, 32).map((item, index) => {
                  if (degree === "Chemical Engineering")
                  
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

                 {electricalUnits.slice(24, 32).map((item, index) => {
                  if (degree === "Electrical Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                 {envUnits.slice(24, 32).map((item, index) => {
                  if (degree === "Environmental Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}

                  {materialsUnits.slice(24, 32).map((item, index) => {
                  if (degree === "Materials Engineering")

                  return item.id ? (
                    <div key={index} onClick={() => showModal(item)}>
                      <div style={{ fontSize: "16px" }}>{item.code}</div>
                      <div className = "unit-code">{item.name}</div>
                      <div className = "unit-title">{item.unitTitle}</div>

                    </div>
                  ) : (
                    <div key={index + new Date()}
                      onClick={() => history(`/search/${index}`)}
                    >
                      <PlusOutlined></PlusOutlined>
                    </div>
                  );
                })}
                
                   {mechanicalUnits.slice(24, 32).map((item, index) => {
                  if (degree === "Mechanical Engineering")
                  
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

                  {mechatronicsAIUnits.slice(24, 32).map((item, index) => {
                  if (degree === "Robotics & Mechatronics Engineering")
                  
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

                     {civilUnits.slice(24, 32).map((item, index) => {
                  if (degree === "Civil Engineering")
                  
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

        <div className="button-container">
          <button type ="submit" className="submit_button" onClick={() => history('/export')}> Submit </button>
          </div>
          
      </div>
    </div>
    </div>
  );
};

export default connect(
  (state) => ({ data: state.data, event: state.event }), //映射状态
  { updateValue } //映射操作状态的方法
)(Main);
