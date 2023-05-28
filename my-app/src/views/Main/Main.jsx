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
import { updateValue, swapValue, changeCourse } from "../../store/actions";
import "./Main.css";
import "./print.css";
import { Link, useLocation } from "react-router-dom";
import Sortable, { Swap } from "sortablejs";

const yearSem = ["2028", "2029", "2020", "2021"];
Sortable.mount(new Swap());

const Main = ({ updateValue, data, event, swapValue, changeCourse }) => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState({});
  const cardFRef = useRef(null);

  //数据
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

  const showModal = (data, index) => {
    setIsModalOpen(true);
    setItem({ data, index });
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

  const showConfirm = (e, bool, bool1) => {
    e.stopPropagation(); //阻止原生事件冒泡
    Modal.confirm({
      title: "Error",
      icon: <ExclamationCircleOutlined />,
      content: `${
        bool && bool1
          ? "Prerequisites have not been completed." +
            "This unit is not offered in this semester"
          : bool
          ? "Prerequisites have not been completed."
          : "This unit is not offered in this semester"
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
    if (event.unit_details?.prerequisite?.OR.length === 0) {
      return true;
    }
    for (let i = 0; i < event.unit_details?.prerequisite?.OR.length; i++) {
      const code = event.unit_details?.prerequisite?.OR[i];
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
    let andArr = event.unit_details?.prerequisite?.AND;
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
      (events.unit_details?.prerequisite?.OR.length === 0 &&
        events.unit_details?.prerequisite?.AND.length === 0) ||
      !events.unit_details
    ) {
      return false;
    }
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
          events.unit_details?.prerequisite?.OR.length !== 0 ||
          events.unit_details?.prerequisite?.OR.length !== 0
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
    item.study = state;
    updateValue(index, item);
    // setAeroUnits([...aeroUnits]);
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
        return "#f0ecd8";
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
    console.log(degree, "------------------------BIOMDENG03");
    switch (degree) {
      case "Biomedical Engineering":
        changeCourse(require("../../BIOMDENG03.json"));
        break;
      case "Aerospace Engineering":
        changeCourse(require("../../AEROENG04.json"));
        break;
      case "Chemical Engineering":
        changeCourse(require("../../CHEMENG04.json"));
        break;
      case "Civil Engineering":
        changeCourse(require("../../CIVILENG03.json"));
        break;
      case "Electrical Engineering":
        changeCourse(require("../../ECSYSENG04.json"));
        break;
      case "Environmental Engineering":
        changeCourse(require("../../ENVIRENG03.json"));
        break;
      case "Mechanical Engineering":
        changeCourse(require("../../MECHENG03.json"));
        break;
      case "Robotics & Mechatronics Engineering":
        changeCourse(require("../../ROBMCTRN03.json"));
        break;
      case "Software Engineering":
        changeCourse(require("../../SFTWRENG01.json"));
        break;
      case "Materials Engineering":
        changeCourse(require("../../MATSENG05.json"));
        break;
    
      
      default:
        break;
    }
    updateValue(event.id, event.item);
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
                  {data.slice(0, 32).map((item, index) => {
                    return !(item.state === 2 || item.state === 4) ? (
                      <div
                        key={index + new Date()}
                        onClick={() => showModal(item, index)}
                        style={{ background: styleColor(item?.study) }}
                        className={`${
                          courseCheck(item, index) ? "error" : ""
                        } ${Math.floor(index / 4) % 2 !== 0 ? "bottom" : ""}  ${
                          item?.study === "passed" || item?.study === "failed"
                            ? "ignore-elements"
                            : "draggable"
                        } ${semCheck(item, index) ? "" : "semerror"} card`}
                      >
                        {courseCheck(item, index) || !semCheck(item, index) ? (
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
                          <div className="three_dot">
                            <Popconfirm
                              placement="rightTop"
                              title={text(item, index)}
                              onConfirm={confirm}
                              okText=""
                              cancelText=""
                            >
                              <MoreOutlined className="state" />
                            </Popconfirm>
                          </div>
                        </span>

                        <div className="unit-code">{item.code}</div>
                        <div></div>
                        <div className="unit-name" title={item.name}>
                          {item.name}
                        </div>
                        <div className="unit-title">{item.unitTitle}</div>

                        <div className="semester-offerings">
                          <span className="offering">
                            {item.sem === 0
                              ? "S1,S2"
                              : item.sem === 1
                              ? "S1"
                              : "S2"}
                          </span>
                          <span className="credit-points">
                            {item["credit points"]}CP
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`${
                          Math.floor(index / 4) % 2 !== 0 ? "bottom" : ""
                        } draggable card`}
                        key={index + new Date()}
                        onClick={() =>
                          history(`/search/${index}`, { state: item.state })
                        }
                      >
                        <div style={{ fontSize: "14px", color: "#169bd5" }}>
                          {" "}
                          Click to Add
                        </div>
                        {/* <PlusOutlined></PlusOutlined> */}
                        {item.state === 2
                          ? "Minor or Technical elective"
                          : item.state === 4
                          ? "First Year elective"
                          : ""}
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
              <Card title={"i"} item={item.data} index={item.index}></Card>
            </Modal>
          </div>
        </div>

        <div className="unit-tracker-container">
          <h1 className="unit-tracker-title"> Failed Units </h1>
          <h1 className="failed-warning">
            {" "}
            *Please verify there are no units marked as failed before submission{" "}
          </h1>
          {data.slice(0, 32).map((item) =>
            item?.study === "failed" ? (
              <div className="failed-unit" key={item.code}>
                {item.code}
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="bottom-div noPrint">
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
          // onClick={() => history("/export")}
          onClick={() => window.print()}
        >
          {" "}
          Save{" "}
        </button>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({ data: state.data, event: state.event }), //映射状态
  { updateValue, swapValue, changeCourse } //映射操作状态的方法
)(Main);
