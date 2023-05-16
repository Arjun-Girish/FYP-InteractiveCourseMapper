import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { Modal, Button, message, Popconfirm } from "antd";
import {
  PlusOutlined,
  ExclamationCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { updateValue } from "../../store/actions";
import "./Main.css";
import { Link, useLocation } from "react-router-dom";

const Main = ({ updateValue, data, event }) => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState({});
  //数据
  const [aeroUnits, setAeroUnits] = useState([
    {
      id: 1,
      box_id: 1,
      semester_status: 3,
      name: "ENG1013",
      credit: "6",
      unitTitle: "Engineering smart systems",
      unitInfo: [],
      prerequisiste: {
        OR: ["ENG1814", "ENG1060"],
        AND: ["ENG1005"],
        prohibiton: [],
      },
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
      name: "Elective",
      credit: "6",
      unitTitle: "First year elective",
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
      name: "MEC2402",
      credit: "6",
      unitTitle: "Design methods",
      unitInfo: [],
    },

    {
      id: 10,
      box_id: 10,
      semester_status: 1,
      name: "MEC2403",
      credit: "6",
      unitTitle: "Mechanics of materials",
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
      name: "Elective",
      credit: "6",
      unitTitle: "Level 1,2,3 elective",
      unitInfo: [],
    },

    {
      id: 13,
      box_id: 13,
      semester_status: 2,
      name: "MAE2402",
      credit: "6",
      unitTitle: "Thermodynamics and gas dynamics",
      unitInfo: [],
    },

    {
      id: 14,
      box_id: 14,
      semester_status: 2,
      name: "MAE2404",
      credit: "6",
      unitTitle: "Aerodynamics 1",
      unitInfo: [],
    },

    {
      id: 15,
      box_id: 15,
      semester_status: 2,
      name: "MAE2505",
      credit: "6",
      unitTitle: "Aerospace dynamics",
      unitInfo: [],
    },

    {
      id: 16,
      box_id: 16,
      semester_status: 3,
      name: "Elective",
      credit: "6",
      unitTitle: "Level 1,2,3 elective",
      unitInfo: [],
    },

    {
      id: 17,
      box_id: 17,
      semester_status: 1,
      name: "MAE3401",
      credit: "6",
      unitTitle: "Aerodynamics 2",
      unitInfo: [],
    },

    {
      id: 18,
      box_id: 18,
      semester_status: 1,
      name: "MAE3404",
      credit: "6",
      unitTitle: "Flight vehicle dynamics",
      unitInfo: [],
    },

    {
      id: 19,
      box_id: 19,
      semester_status: 1,
      name: "MEC3456",
      credit: "6",
      unitTitle: "Engineering computational analysis",
      unitInfo: [],
    },

    {
      id: 20,
      box_id: 20,
      semester_status: 3,
      name: "Elective",
      credit: "6",
      unitTitle: "Level 1,2,3 elective",
      unitInfo: [],
    },

    {
      id: 21,
      box_id: 21,
      semester_status: 2,
      name: "MAE3405",
      credit: "6",
      unitTitle: "Aerospace propulsion",
      unitInfo: [],
    },

    {
      id: 22,
      box_id: 22,
      semester_status: 2,
      name: "MAE3408",
      credit: "6",
      unitTitle: "Aerospace control",
      unitInfo: [],
    },

    {
      id: 23,
      box_id: 23,
      semester_status: 2,
      name: "MAE3411",
      credit: "6",
      unitTitle: "Aerospace structural mechanics",
      unitInfo: [],
    },

    {
      id: 24,
      box_id: 24,
      semester_status: 3,
      name: "Elective",
      credit: "6",
      unitTitle: "Level 1,2,3 elective",
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
      name: "MAE4416",
      credit: "6",
      unitTitle: "Orbital mechanics and spaceflight dynamics",
      unitInfo: [],
    },

    {
      id: 27,
      box_id: 27,
      semester_status: 1,
      name: "MEC4404",
      credit: "6",
      unitTitle: "Professional practice",
      unitInfo: [],
    },

    {
      id: 28,
      box_id: 28,
      semester_status: 3,
      name: "Elective",
      credit: "6",
      unitTitle: "Level 1,2,3 elective",
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
      name: "MAE4426",
      credit: "6",
      unitTitle: "Finite element analysis and composite structures",
      unitInfo: [],
    },

    {
      id: 31,
      box_id: 31,
      semester_status: 2,
      name: "MAE4410",
      credit: "6",
      unitTitle: "Flight vehicle design",
      unitInfo: [],
    },

    {
      id: 32,
      box_id: 32,
      semester_status: 3,
      name: "Elective",
      credit: "6",
      unitTitle: "Level 1,2,3 elective",
      unitInfo: [],
    },
  ]);
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

  const showConfirm = (e) => {
    e.stopPropagation(); //阻止原生事件冒泡
    Modal.confirm({
      title: "prerequisite required",
      icon: <ExclamationCircleOutlined />,
      content: "need prerequisite:...",
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

  const courseCheck = (events, id) => {
    if (!events.prerequisiste) return false;
    if (JSON.stringify(events) !== "{}") {
      // 计算上一组数据在数组中的起始位置和结束位置
      const end = Math.ceil((id * 1 + 1) / 8 - 1) * 8;
      const start = end - 8;
      if (id > 7) {
        let res = checkDataOr(data.slice(start, end), events);
        let res1 = checkDataAND(data.slice(start, end), events);
        console.log(!(res && res1));
        return !(res && res1);
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
  const handelColor = (item, state) => {
    console.log(item, state);

    if (degree === "Aerospace Engineering") {
      aeroUnits[item.id - 1].state = state;
      console.log(aeroUnits);
      setAeroUnits([...aeroUnits]);
    } else {
      bioUnits[item.id - 1].state = state;
      setBioUnits([...bioUnits]);
    }
  };
  const styleColor = (state) => {
    switch (state) {
      case "passed":
        return "#008000";
      case "failed":
        return "#ff0000";
      case "progess":
        return "#ffa500";
      case "upcoming":
        return "#eeece1";
      default:
        return "#eeece1";
    }
  };
  const text = (item) => {
    return (
      <div>
        <div
          onClick={() => {
            handelColor(item, "passed");
          }}
        >
          <span
            className="passed color"
            style={{ ...color, background: "#008000" }}
          ></span>
          <span>Passed</span>
        </div>

        <div
          onClick={() => {
            handelColor(item, "failed");
          }}
        >
          <span
            className="failed color"
            style={{ ...color, background: "#ff0000" }}
          ></span>
          <span>Failed</span>
        </div>

        <div
          onClick={() => {
            handelColor(item, "progess");
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
            handelColor(item, "upcoming");
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
  useEffect(() => {
    updateValue(event.id, event);
  }, [event]);

  return (
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
                      <div
                        key={index}
                        onClick={() => showModal(item)}
                        style={{ background: styleColor(item?.state) }}
                      >
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <Popconfirm
                            placement="rightTop"
                            title={text(item)}
                            onConfirm={confirm}
                            okText=""
                            cancelText=""
                          >
                            <MoreOutlined className="state" />
                          </Popconfirm>
                        </span>
                        <div style={{ fontSize: "16px" }}>{item.code}</div>
                        <div className="unit-code">{item.name}</div>
                        <div className="unit-title">{item.unitTitle}</div>
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

                {bioUnits.slice(0, 8).map((item, index) => {
                  if (degree === "Biomedical Engineering")
                    return item.id ? (
                      <div key={index} onClick={() => showModal(item)}>
                        <div style={{ fontSize: "16px" }}>{item.code}</div>
                        <div className="unit-code">{item.name}</div>
                        <div className="unit-title">{item.unitTitle}</div>
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
            <div>{yearStart + 1}</div>
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
                        <div className="unit-code">{item.name}</div>
                        <div className="unit-title">{item.unitTitle}</div>
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
                        <div className="unit-code">{item.name}</div>
                        <div className="unit-title">{item.unitTitle}</div>
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
              </div>
            </div>
          </div>
          <div>
            <div>{yearStart + 2}</div>
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
                        <div className="unit-code">{item.name}</div>
                        <div className="unit-title">{item.unitTitle}</div>
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
                        <div className="unit-code">{item.name}</div>
                        <div className="unit-title">{item.unitTitle}</div>
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
              </div>
            </div>
          </div>
          <div>
            <div>{yearStart + 3}</div>
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
                        <div className="unit-code">{item.name}</div>
                        <div className="unit-title">{item.unitTitle}</div>
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

                {bioUnits.slice(24, 32).map((item, index) => {
                  if (degree === "Biomedical Engineering")
                    return item.id ? (
                      <div key={index} onClick={() => showModal(item)}>
                        <div style={{ fontSize: "16px" }}>{item.code}</div>
                        <div className="unit-code">{item.name}</div>
                        <div className="unit-title">{item.unitTitle}</div>
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
              </div>
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

      <div className="bottom-div">
        <button
          type="submit"
          className="submit_button"
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
  { updateValue } //映射操作状态的方法
)(Main);
