import Card from "../../components/Card";
import { useEffect, useState, useRef } from "react";
import { Modal, Button, message, Popconfirm } from "antd";
import {
  PlusOutlined,
  ExclamationCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { updateValue, swapValue } from "../../store/actions";
import "./Main.css";
import { Link, useLocation } from "react-router-dom";
import Sortable, { Swap } from "sortablejs";

const yearSem = ["2028", "2029", "2020", "2021"];
Sortable.mount(new Swap());

const Main = ({ updateValue, data, event, swapValue }) => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState({});
  const cardFRef = useRef(null);

  //数据
  // const [aeroUnits, setAeroUnits] = useState([
  //   {
  //     id: "",
  //     box_id: 1,
  //     semester_status: 3,
  //     name: "ENG1013",
  //     credit: "6",
  //     unitTitle: "Engineering smart systems",
  //     unitInfo: [],
  //     prerequisite: {
  //       OR: ["ENG1814", "ENG1060"],
  //       AND: ["ENG1005"],
  //       prohibiton: [],
  //     },
  //   },

  //   {
  //     id: "",
  //     box_id: 2,
  //     semester_status: 3,
  //     name: "ENG1005",
  //     credit: "6",
  //     unitTitle: "Engineering Mathamatics",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 3,
  //     semester_status: 3,
  //     name: "ENG1014",
  //     credit: "6",
  //     unitTitle: "Engineering numerical analysis",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 4,
  //     semester_status: 3,
  //     name: "Elective",
  //     credit: "6",
  //     unitTitle: "First year elective",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 5,
  //     semester_status: 3,
  //     name: "ENG1012",
  //     credit: "6",
  //     unitTitle: "Engineering design",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 6,
  //     semester_status: 3,
  //     name: "ENG1011",
  //     credit: "6",
  //     unitTitle: "Engineering methods",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 7,
  //     semester_status: 3,
  //     name: "Elective",
  //     credit: "6",
  //     unitTitle: "Level 1,2,3 elective",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 8,
  //     semester_status: 3,
  //     name: "Elective",
  //     credit: "6",
  //     unitTitle: "Level 1,2,3 elective",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 9,
  //     box_id: 9,
  //     semester_status: 1,
  //     name: "MEC2402",
  //     credit: "6",
  //     unitTitle: "Design methods",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 10,
  //     box_id: 10,
  //     semester_status: 1,
  //     name: "MEC2403",
  //     credit: "6",
  //     unitTitle: "Mechanics of materials",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 11,
  //     box_id: 11,
  //     semester_status: 3,
  //     name: "ENG2005",
  //     credit: "6",
  //     unitTitle: "Advanced engineering mathematics",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 12,
  //     semester_status: 3,
  //     name: "Elective",
  //     credit: "6",
  //     unitTitle: "Level 1,2,3 elective",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 13,
  //     box_id: 13,
  //     semester_status: 2,
  //     name: "MAE2402",
  //     credit: "6",
  //     unitTitle: "Thermodynamics and gas dynamics",
  //     unitInfo: [],
  //     prerequisite: {
  //       OR: ["ENG1814", "ENG1060"],
  //       AND: ["ENG1005"],
  //       prohibiton: [],
  //     },
  //   },

  //   {
  //     id: 14,
  //     box_id: 14,
  //     semester_status: 2,
  //     name: "MAE2404",
  //     credit: "6",
  //     unitTitle: "Aerodynamics 1",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 15,
  //     box_id: 15,
  //     semester_status: 2,
  //     name: "MAE2505",
  //     credit: "6",
  //     unitTitle: "Aerospace dynamics",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 16,
  //     semester_status: 3,
  //     name: "Elective",
  //     credit: "6",
  //     unitTitle: "Level 1,2,3 elective",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 17,
  //     box_id: 17,
  //     semester_status: 1,
  //     name: "MAE3401",
  //     credit: "6",
  //     unitTitle: "Aerodynamics 2",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 18,
  //     box_id: 18,
  //     semester_status: 1,
  //     name: "MAE3404",
  //     credit: "6",
  //     unitTitle: "Flight vehicle dynamics",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 19,
  //     box_id: 19,
  //     semester_status: 1,
  //     name: "MEC3456",
  //     credit: "6",
  //     unitTitle: "Engineering computational analysis",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 20,
  //     semester_status: 3,
  //     name: "Elective",
  //     credit: "6",
  //     unitTitle: "Level 1,2,3 elective",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 21,
  //     box_id: 21,
  //     semester_status: 2,
  //     name: "MAE3405",
  //     credit: "6",
  //     unitTitle: "Aerospace propulsion",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 22,
  //     box_id: 22,
  //     semester_status: 2,
  //     name: "MAE3408",
  //     credit: "6",
  //     unitTitle: "Aerospace control",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 23,
  //     box_id: 23,
  //     semester_status: 2,
  //     name: "MAE3411",
  //     credit: "6",
  //     unitTitle: "Aerospace structural mechanics",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 24,
  //     semester_status: 3,
  //     name: "Elective",
  //     credit: "6",
  //     unitTitle: "Level 1,2,3 elective",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 25,
  //     box_id: 25,
  //     semester_status: 3,
  //     name: "ENG4701",
  //     credit: "6",
  //     unitTitle: "Final year project A",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 26,
  //     box_id: 26,
  //     semester_status: 1,
  //     name: "MAE4416",
  //     credit: "6",
  //     unitTitle: "Orbital mechanics and spaceflight dynamics",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 27,
  //     box_id: 27,
  //     semester_status: 1,
  //     name: "MEC4404",
  //     credit: "6",
  //     unitTitle: "Professional practice",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 28,
  //     semester_status: 3,
  //     name: "Elective",
  //     credit: "6",
  //     unitTitle: "Level 1,2,3 elective",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 29,
  //     box_id: 29,
  //     semester_status: 3,
  //     name: "ENG4702",
  //     credit: "6",
  //     unitTitle: "Final year project B",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 30,
  //     box_id: 30,
  //     semester_status: 2,
  //     name: "MAE4426",
  //     credit: "6",
  //     unitTitle: "Finite element analysis and composite structures",
  //     unitInfo: [],
  //   },

  //   {
  //     id: 31,
  //     box_id: 31,
  //     semester_status: 2,
  //     name: "MAE4410",
  //     credit: "6",
  //     unitTitle: "Flight vehicle design",
  //     unitInfo: [],
  //   },

  //   {
  //     id: "",
  //     box_id: 32,
  //     semester_status: 3,
  //     name: "Elective",
  //     credit: "6",
  //     unitTitle: "Level 1,2,3 elective",
  //     unitInfo: [],
  //   },
  // ]);
  const [bioUnits, setBioUnits] = useState([
    {
      id: 1,
      box_id: 1,
      semester_status: 3,
      name: "ENG1013",
      credit: "6",
      unitTitle: "Engineering smart systems",
      unitInfo: [],
    },

    {
      id: 2,
      box_id: 2,
      semester_status: 3,
      name: "ENG1005",
      credit: "6",
      unitTitle: "Engineering Mathamatics",
      unitInfo: [],
    },

    {
      id: 3,
      box_id: 3,
      semester_status: 3,
      name: "ENG1014",
      credit: "6",
      unitTitle: "Engineering numerical analysis",
      unitInfo: [],
    },

    {
      id: 4,
      box_id: 4,
      semester_status: 3,
      name: "BMS1021",
      credit: "6",
      unitTitle: "Cells, tissues and organisms",
      unitInfo: [],
    },

    {
      id: 5,
      box_id: 5,
      semester_status: 3,
      name: "ENG1012",
      credit: "6",
      unitTitle: "Engineering design",
      unitInfo: [],
    },

    {
      id: 6,
      box_id: 6,
      semester_status: 3,
      name: "ENG1011",
      credit: "6",
      unitTitle: "Engineering methods",
      unitInfo: [],
    },

    {
      id: 7,
      box_id: 7,
      semester_status: 3,
      name: "Elective",
      credit: "6",
      unitTitle: "Level 1,2,3 elective",
      unitInfo: [],
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
      unitInfo: [],
    },

    {
      id: 10,
      box_id: 10,
      semester_status: 1,
      name: "PHY2011",
      credit: "6",
      unitTitle: "Neuroscience of communication",
      unitInfo: [],
    },

    {
      id: 11,
      box_id: 11,
      semester_status: 3,
      name: "ENG2005",
      credit: "6",
      unitTitle: "Advanced engineering mathematics",
      unitInfo: [],
    },

    {
      id: 12,
      box_id: 12,
      semester_status: 3,
      name: "MCB2011",
      credit: "6",
      unitTitle: "Molecular biology",
      unitInfo: [],
    },

    {
      id: 13,
      box_id: 13,
      semester_status: 2,
      name: "ECE2111",
      credit: "6",
      unitTitle: "Signals and systems",
      unitInfo: [],
    },

    {
      id: 14,
      box_id: 14,
      semester_status: 2,
      name: "CHE2161",
      credit: "6",
      unitTitle: "Mechanics of fluids",
      unitInfo: [],
    },

    {
      id: 15,
      box_id: 15,
      semester_status: 2,
      name: "PHY2042",
      credit: "6",
      unitTitle: "Human Physiology",
      unitInfo: [],
    },

    {
      id: 16,
      box_id: 16,
      semester_status: 3,
      name: "MCB2022",
      credit: "6",
      unitTitle: "The dynamic cell",
      unitInfo: [],
    },

    {
      id: 17,
      box_id: 17,
      semester_status: 1,
      name: "ECE2131",
      credit: "6",
      unitTitle: "Electrical circuits",
      unitInfo: [],
    },

    {
      id: 18,
      box_id: 18,
      semester_tsatus: 1,
      name: "MEC3601",
      credit: "6",
      unitTitle: "Mechanics for biomedical engineering",
      unitInfo: [],
    },

    {
      id: 19,
      box_id: 19,
      semester_status: 1,
      name: "MTE3204",
      credit: "6",
      unitTitle: "Biomaterials 1",
      unitInfo: [],
    },

    {
      id: 20,
      box_id: 20,
      semester_status: 3,
      name: "DEV2011",
      credit: "6",
      unitTitle: "Early human development",
      unitInfo: [],
    },

    {
      id: 21,
      box_id: 21,
      semester_status: 2,
      name: "ECE4179",
      credit: "6",
      unitTitle: "Neural netowrks and deep learning",
      unitInfo: [],
    },

    {
      id: 22,
      box_id: 22,
      semester_status: 2,
      name: "ECE4087",
      credit: "6",
      unitTitle: "Medical technology Innovation",
      unitInfo: [],
    },

    {
      id: 23,
      box_id: 23,
      semester_status: 2,
      name: "MEC3602",
      credit: "6",
      unitTitle: "Biomedical microsystems",
      unitInfo: [],
    },

    {
      id: 24,
      box_id: 24,
      semester_status: 3,
      name: "DEV2022",
      credit: "6",
      unitTitle: "Human anatomy and development",
      unitInfo: [],
    },

    {
      id: 25,
      box_id: 25,
      semester_status: 3,
      name: "ENG4701",
      credit: "6",
      unitTitle: "Final year project A",
      unitInfo: [],
    },

    {
      id: 26,
      box_id: 26,
      semester_status: 1,
      name: "MEC4601",
      credit: "6",
      unitTitle: "Implantable devices",
      unitInfo: [],
    },

    {
      id: 27,
      box_id: 27,
      semester_status: 1,
      name: "TRC3500",
      credit: "6",
      unitTitle: "Sensors and artifical perception",
      unitInfo: [],
    },

    {
      id: 28,
      box_id: 28,
      semester_status: 3,
      name: "ENG3111",
      credit: "6",
      unitTitle: "Sensory and cognitive neuroscience",
      unitInfo: [],
    },

    {
      id: 29,
      box_id: 29,
      semester_status: 3,
      name: "ENG4702",
      credit: "6",
      unitTitle: "Final year project B",
      unitInfo: [],
    },

    {
      id: 30,
      box_id: 30,
      semester_status: 2,
      name: "ENG4105",
      credit: "6",
      unitTitle: "Biomedical engineering",
      unitInfo: [],
    },

    {
      id: 31,
      box_id: 31,
      semester_status: 2,
      name: "MEC4404",
      credit: "6",
      unitTitle: "Professional practice",
      unitInfo: [],
    },

    {
      id: 32,
      box_id: 32,
      semester_status: 3,
      name: "ECE4081",
      credit: "6",
      unitTitle: "Medical Instrumentation",
      unitInfo: [],
    },
  ]);

  const showModal = (item) => {
    setIsModalOpen(true);
    setItem(item);
    console.log(isModalOpen);
  };

  const location = useLocation();
  const yearStart = Number(location.state.semesterStart);
  const degree = location.state.major;

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [failedUnits, setFailedUnits] = useState([]);

  const showConfirm = (e, bool, bool1) => {
    e.stopPropagation(); //阻止原生事件冒泡
    Modal.confirm({
      title: "Pre-Requisite required",
      icon: <ExclamationCircleOutlined />,
      content: `${
        bool && bool1
          ? "prerequisite&&semester do not meet"
          : bool
          ? "prerequisite do not meet"
          : "semester do not meet"
      }`,
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const checkDataOr = (data, event) => {
    if (event.unit_details.prerequisite.OR.length === 0) {
      return true;
    }
    for (let i = 0; i < event.unit_details.prerequisite.OR.length; i++) {
      const code = event.unit_details.prerequisite.OR[i];
      for (let j = 0; j < data.length; j++) {
        if (data[j].code === code) {
          if (data[j].study === "failed") {
            continue;
          }
          return true;
        }
      }
    }
    return false;
  };

  const checkDataAND = (data, event) => {
    let andArr = event.unit_details.prerequisite.AND;
    let code = [];
    for (let j = 0; j < data.length; j++) {
      if (data[j].study === "failed") {
        continue;
      }
      code.push(data[j].code);
    }
    for (let i = 0; i < andArr.length; i++) {
      if (!code.includes(andArr[i])) {
        return false;
      }
    }
    return true;
  };

  const courseCheck = (events, id) => {
    //state 数据
    // const datas = degree === "Aerospace Engineering" ? data : bioUnits;
    if (
      events.unit_details.prerequisite.OR.length === 0 &&
      events.unit_details.prerequisite.AND.length === 0
    )
      return false;
    if (JSON.stringify(events) !== "{}") {
      // 计算上一组数据在数组中的起始位置和结束位置
      const end = Math.ceil((id * 1 + 1) / 4 - 1) * 4;
      const start = 0;
      if (id > 3) {
        let res = checkDataOr(data.slice(start, end), events);
        let res1 = checkDataAND(data.slice(start, end), events);
        if (events.code === "MAE3401") {
          // console.log(start, end, "-start, end");
          // console.log(res && res1, res, res1);
        }
        return !(res && res1);
      } else {
        if (
          events.unit_details.prerequisite.OR.length !== 0 ||
          events.unit_details.prerequisite.OR.length !== 0
        ) {
          return true;
        }
      }
    }
  };

  const color = {
    display: "inline-block",
    width: "15px",
    height: "15px",
    verticalAlign: "sub",
  };

  //选择课程状态
  const handelColor = (item, index, state) => {
    console.log(item, state);

    if (degree === "Aerospace Engineering") {
      item.study = state;
      updateValue(index, item);
      // setAeroUnits([...aeroUnits]);
    } else {
      bioUnits[item.id - 1].study = state;
      // setBioUnits([...bioUnits]);
    }

    /* Adding to failed Units Column */
    if (state === "failed" && !failedUnits.includes(item.code)) {
      console.log(item.name);
      setFailedUnits((list) => [...list, item.code]);
    }

    /* Adding to passed Units Column */
    if (state === "passed" || state === "progess" || state === "upcoming") {
      console.log(item.name);
      const index1 = failedUnits.indexOf(item.code);
      console.log(failedUnits[index1]);

      if (failedUnits[index1] === item.code) {
        failedUnits.splice(index1, 1);
      }
    }
  };

  const styleColor = (state) => {
    switch (state) {
      case "passed":
        return "#7fbf7f";

      case "failed":
        return "#ff7f7f";

      case "progess":
        return "#ffd27f";

      case "upcoming":
        return "#bfbfbf";

      default:
        return "#eeece1";
    }
  };
  const text = (item, index) => {
    return (
      <div>
        <div
          onClick={() => {
            handelColor(item, index, "passed");
          }}
        >
          <span
            className="passed color"
            style={{ ...color, background: "#7fbf7f" }}
          ></span>
          <span>Passed</span>
        </div>

        <div
          onClick={() => {
            handelColor(item, index, "failed");
          }}
        >
          <span
            className="failed color"
            style={{ ...color, background: "#ff7f7f" }}
          ></span>
          <span>Failed</span>
        </div>

        <div
          onClick={() => {
            handelColor(item, index, "progess");
          }}
        >
          <span
            className="progess color"
            style={{ ...color, background: "#ffa500" }}
          ></span>
          <span>ln-Progress</span>
        </div>

        <div
          onClick={() => {
            handelColor(item, index, "upcoming");
          }}
        >
          <span
            className="upcoming color"
            style={{ ...color, background: "#eeece1" }}
          ></span>
          <span>Upcoming</span>
        </div>
      </div>
    );
  };

  const confirm = () => {
    message.info("Clicked on Yes.");
  };

  //sem
  const semCheck = (item, index) => {
    if (item.sem === 0) {
      return true;
    }
    if ((Math.floor(index / 4) + 1) % 2 === 0) {
      return item.sem === 2;
    }
    {
      return item.sem === 1;
    }
  };
  useEffect(() => {
    updateValue(event.id - 1, event);
    const sortable = Sortable.create(cardFRef.current, {
      animation: 150,
      easing: "cubic-bezier(1, 0, 0, 1)",
      swap: true, // Enable swap plugin
      swapClass: "highlight", // The class applied to the hovered swap item
      // sort: false, // To disable sorting: set sort to false
      draggable: ".draggable",
      filter: ".ignore-elements",
      onSort: (evt) => {
        const { oldIndex, newIndex } = evt;
        setTimeout(() => {
          console.log(oldIndex, newIndex, "--oldIndex, newIndex");
          swapValue(oldIndex, newIndex);
        }, 200);
      },
    });

    return () => sortable.destroy();
  }, []);

  return (
    <div className="main-whole-container">
      <div className="hometop">Specialisation: {location.state.major}</div>
      <div className="main-container">
        <div className="home-container">
          <div className="home">
            <div className="homemain">
              <div className="homemain-left">
                {yearSem.map((item, index) => {
                  return (
                    <div className="year-container" key={item}>
                      <div className="year-text">{yearStart + index}</div>
                      <div className="sem-container">
                        <div>Samester 1</div>
                        <div className="bottom">Samester 2</div>
                        {index !== yearSem.length - 1 ? (
                          <span className="underline"></span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="homemain-right">
                <div className="cardF" ref={cardFRef}>
                  {(degree === "Aerospace Engineering" ? data : bioUnits)
                    .slice(0, 32)
                    .map((item, index) => {
                      return !(item.state === 2) ? (
                        <div
                          key={index + new Date()}
                          onClick={() => showModal(item)}
                          style={{ background: styleColor(item?.study) }}
                          className={`${
                            courseCheck(item, index) ? "error" : ""
                          } ${
                            Math.floor(index / 4) % 2 !== 0 ? "bottom" : ""
                          }  ${
                            item?.study === "passed" || item?.study === "failed"
                              ? "ignore-elements"
                              : "draggable"
                          } ${semCheck(item, index) ? "" : "semerror"}`}
                        >
                          {courseCheck(item, index) ||
                          !semCheck(item, index) ? (
                            <>
                              <ExclamationCircleOutlined
                                onClick={(e) =>
                                  showConfirm(
                                    e,
                                    courseCheck(item, index),
                                    !semCheck(item, index)
                                  )
                                }
                                className="state1"
                              />
                            </>
                          ) : (
                            ""
                          )}
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <Popconfirm
                              placement="rightTop"
                              title={text(item, index)}
                              onConfirm={confirm}
                              okText=""
                              cancelText=""
                            >
                              <MoreOutlined className="state" />
                            </Popconfirm>
                          </span>
                          <div style={{ fontSize: "16px" }}>{item.code}</div>
                          <div className="unit-code" title={item.name}>
                            {item.name}
                          </div>
                          <div className="unit-title">{item.unitTitle}</div>
                        </div>
                      ) : (
                        <div
                          className={`${
                            Math.floor(index / 4) % 2 !== 0 ? "bottom" : ""
                          } draggable`}
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
        </div>

        <div className="unit-tracker-container">
          <h1 className="unit-tracker-title"> Failed Units </h1>
          <h1 className="failed-warning">
            {" "}
            *Please verify there are no units marked as failed before submission{" "}
          </h1>

          {failedUnits.map((failedUnit) => (
            <div className="failed-unit" key={failedUnit}>
              {failedUnit}
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-div">
        <button className="back-button-main" onClick={() => history(-1)}>
          Back
        </button>

        <div className="legend-container">
          <div className="legend-pass"></div>
          <h1 className="legend-text"> Passed </h1>

          <div className="legend-fail"></div>
          <h1 className="legend-text"> Failed </h1>

          <div className="legend-in-progress"></div>
          <h1 className="legend-text"> In-Progress </h1>

          <div className="legend-upcoming"></div>
          <h1 className="legend-text"> Upcoming </h1>
        </div>

        <button
          type="submit"
          className="submit-button-main"
          onClick={() => history("/export")}
        >
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({ data: state.data, event: state.event }), //映射状态
  { updateValue, swapValue } //映射操作状态的方法
)(Main);
