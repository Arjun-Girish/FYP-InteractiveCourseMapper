import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { PlusOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { updateValue } from "../../store/actions";
import "./index.css";

const Home = ({ updateValue, data, event }) => {
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState({});
  const showModal = (item) => {
    setIsModalOpen(true);
    setItem(item);
    console.log(isModalOpen);
  };
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
  useEffect(() => {
    updateValue(event.id, event);
  }, [event]);
  return (
    <div className="home">
      <div className="hometop">Specialisalion - Mechalronics Engineering</div>
      <div className="homemain">
        <div>
          <div>2023</div>
          <div className="homecon">
            <div>
              <div>Samester 1</div>
              <div>Samester 2</div>
            </div>
            <div className="cardF">
              {data.slice(0, 8).map((item, index) => {
                return item.id ? (
                  <div key={index} onClick={() => showModal(item)}>
                    <div style={{ fontSize: "16px" }}>{item.code}</div>
                    <div>{item.name}</div>
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
          <div>2024</div>
          <div className="homecon">
            <div>
              <div>Samester 1</div>
              <div>Samester 2</div>
            </div>
            <div className="cardF">
              {data.slice(8, 16).map((item, index) => {
                return item.id ? (
                  <div
                    key={index}
                    onClick={() => showModal(item)}
                    className={courseCheck(item, index + 8) ? "error" : ""}
                  >
                    {courseCheck(item, index + 8) ? (
                      <ExclamationCircleOutlined onClick={showConfirm} />
                    ) : (
                      ""
                    )}
                    <div style={{ fontSize: "16px" }}>{item.code}</div>
                    <div>{item.name}</div>
                  </div>
                ) : (
                  <div
                    key={index + new Date()}
                    onClick={() => history(`/search/${index + 8}`)}
                  >
                    <PlusOutlined></PlusOutlined>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div>2025</div>
          <div className="homecon">
            <div>
              <div>Samester 1</div>
              <div>Samester 2</div>
            </div>
            <div className="cardF">
              {data.slice(16, 24).map((item, index) => {
                return item.id ? (
                  <div
                    key={index}
                    onClick={() => showModal(item)}
                    className={courseCheck(item, index + 16) ? "error" : ""}
                  >
                    {courseCheck(item, index + 16) ? (
                      <ExclamationCircleOutlined onClick={showConfirm} />
                    ) : (
                      ""
                    )}
                    <div style={{ fontSize: "16px" }}>{item.code}</div>
                    <div>{item.name}</div>
                  </div>
                ) : (
                  <div
                    key={index + new Date()}
                    onClick={() => history(`/search/${index + 16}`)}
                  >
                    <PlusOutlined></PlusOutlined>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div>2026</div>
          <div className="homecon">
            <div>
              <div>Samester 1</div>
              <div>Samester 2</div>
            </div>
            <div className="cardF">
              {data.slice(24, 32).map((item, index) => {
                return item.id ? (
                  <div
                    key={index}
                    onClick={() => showModal(item)}
                    className={courseCheck(item, index + 24) ? "error" : ""}
                  >
                    {courseCheck(item, index + 24) ? (
                      <ExclamationCircleOutlined onClick={showConfirm} />
                    ) : (
                      ""
                    )}
                    <div style={{ fontSize: "16px" }}>{item.code}</div>
                    <div>{item.name}</div>
                  </div>
                ) : (
                  <div
                    key={index + new Date()}
                    onClick={() => history(`/search/${index + 32}`)}
                  >
                    <PlusOutlined></PlusOutlined>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="homebottom">
        <div>
          <Button type="primary" ghost>
            Back
          </Button>
        </div>
        <div>
          <Button type="primary">Submit</Button>
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
        <Card title={"Advanced engineering mathematics"} item={item}></Card>
      </Modal>
    </div>
  );
};

export default connect(
  (state) => ({ data: state.data, event: state.event }), //映射状态
  { updateValue } //映射操作状态的方法
)(Home);
