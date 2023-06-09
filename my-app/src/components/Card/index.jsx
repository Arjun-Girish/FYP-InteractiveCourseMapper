// import "./index.css";
// import { Button } from "antd";
// // import { EllipsisOutlined } from '@ant-design/icons';
// import React from "react";
// import Tree from "../tree/";
// import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { updateValue, updateEvent } from "../../store/actions";
// const MyCard = (props) => {
//   const history = useNavigate();
//   const { title, item, updateValue } = props;
//   const orPrereqs = item?.prerequisiste?.OR.map((prereq, index) => {
//     return {
//       id: (index + item?.prerequisiste?.AND.length + 1).toString(),
//       value: {
//         text: prereq,
//       },
//     };
//   });

//   const andPrereqs = item?.prerequisiste?.AND.map((prereq, index) => {
//     return {
//       id: (index + 1).toString(),
//       value: {
//         text: prereq,
//       },
//     };
//   });
//   const edit = () => {
//     updateValue(item.id, {});
//     updateEvent({});
//   };
//   const change = () => {
//     history(`/search/${item.id}`);
//   };
//   const nodes = [
//     {
//       id: "-1",
//       value: {
//         text: item.name,
//       },
//     },
//   ];
//   const edges = [];
//   if (orPrereqs?.length > 0) {
//     orPrereqs.push({
//       id: "0",
//     });
//     edges.push({
//       source: "-1",
//       target: "0",
//       value: { text: "or" },
//     });
//     orPrereqs.forEach((element) => {
//       if (element.id === "0") {
//         return;
//       }
//       edges.push({
//         source: "0",
//         target: element.id,
//       });
//     });

//     nodes.push(...orPrereqs);
//   }
//   if (andPrereqs?.length > 0) {
//     edges.push({
//       source: "-1",
//       target: "1",
//       value: { text: "and" },
//     });
//     andPrereqs.forEach((element) => {
//       if (element.id === "1") {
//         return;
//       }
//       edges.push({
//         source: "1",
//         target: element.id,
//       });
//     });
//     nodes.push(...andPrereqs);
//   }
//   return (
//     <div className="card">
//       <div className="header">
//         <span className="title">{title}</span>
//         <Button
//           size="small"
//           onClick={() => {
//             change();
//           }}
//         >
//           Change
//         </Button>
//         <Button
//           size="small"
//           onClick={() => {
//             edit();
//           }}
//         >
//           Edit
//         </Button>
//       </div>
//       <div className="context">
//         <div className="top">
//           <div className="left">
//             <Tree data={{ nodes, edges }}></Tree>
//           </div>
//           <div className="right">
//             Summary Information <br />
//             Department: Faculty of Engineering <br />
//             Campus:Clayton
//             <br />
//             Teaching Period : Sem 1 or Sem 2 <br />
//             Prohibition: MTH2010,MTH2015 <br />
//             EA competencies:
//             <br />
//             Major: ECSE
//             <br />
//             Electives:.-----
//             <br />
//             <Button type="primary" style={{ float: "right" }}>
//               <a
//                 href="https://www.baidu.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Handbook
//               </a>
//             </Button>
//           </div>
//         </div>

//         <div className="bottom">
//           <strong>OVERVIEW</strong>
//           <br />
//           Aurther ordinarv differential equations:dvanced matrix alcsystems of
//           ODEhalf-range series. solution of ODEs.spectra.Furthefields
//           deldiveroence.curlandLaplacian; surfaPDESheat and wave
//           equations.superposition.of linear systems, numerical solution of ODEs
//           and simplePDEs.accuracy.introduction to PS and FE methods
//         </div>
//       </div>
//     </div>
//   );
// };

// export default connect(
//   (state) => ({ data: state.data }), //映射状态
//   { updateValue, updateEvent } //映射操作状态的方法
// )(MyCard);
import "./index.css";
import { Button } from "antd";
// import { EllipsisOutlined } from '@ant-design/icons';
import React from "react";
import Tree from "../tree/";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateValue, updateEvent } from "../../store/actions";
import Index from "../../views/search";
const MyCard = (props) => {
  const history = useNavigate();
  const { title, item, updateValue,index } = props;
  const orPrereqs = item.unit_details?.prerequisite?.OR.map((prereq) => {
    return {
      value: {
        id:2,
        name: prereq,
      },
    };
  });

  const andPrereqs = item.unit_details?.prerequisite?.AND.map((prereq) => {
    return {
      value: {
        id:3,
        name: prereq,
      },
    };
  });
  const edit = () => {
    updateValue(item.id - 1, {});
  };
  const change = () => {
    history(`/search/${index}`, { state: 6 });
  };
  const root = {
    id: "root",
    value: {
      name: item.code,
      title: item.name,
    },
    children: [],
  };
  const children = [];
  if (orPrereqs?.length > 0) {
    children.push({
      children: orPrereqs,
    });
  }
  if (andPrereqs?.length > 0) {
    children.push(...andPrereqs);
  }
  root.children = children;

  return (
    <div className="card">
      <div className="header-popup-container">
        <span className="title">{item.name}</span>

        <Button
          size="small"
          onClick={() => {
            change();
          }}
        >
          Change
        </Button>
 {/*         <Button
          size="small"
          onClick={() => {
          }}
        >
          Edit
        </Button> */}
      </div>
      <div className="context">
        <div className="top">
          <div className="left-popup">
            <Tree data={root}></Tree>
          </div>
          <div className="right-popup">
            <div className="right-title"> Summary Information </div>

            <div className="right-unit-info-container">
              <h1 className = "right-unit-info-header"> Campus: </h1> 
              <p className= "right-unit-info-header">  Clayton </p>
            </div>

            <div className="right-unit-info-container">
              <h1 className = "right-unit-info-header"> Department: </h1> 
              <p className= "right-unit-info-header">  Faculty of Engineering </p>
            </div>

            <div className="right-unit-info-container">
              <h1 className = "right-unit-info-header"> Teaching Period: </h1> 
              <p className= "right-unit-info-header">    {item.sem === 0
              ? "Semester 1 or Semester 2"
              : item.sem === 1
              ? "Semester 1"
              : "Semester 2"}{" "}
            <br /> </p>
            </div>

            <div className="right-unit-info-container">
              <h1 className = "right-unit-info-header"> Prohibition:  </h1> 
              <p className= "right-unit-info-header"> 
              <span style={{color:'blue'}}>OR</span><span>:{item.unit_details?.prohibition.OR}</span> 
          </p>
            </div>
            <div className="right-unit-info-container">
            <h1 className = "right-unit-info-header" style={{color:"white"}}> Prohibition:  </h1> 
            <p className= "right-unit-info-header"> 
              <span style={{color:'red'}}>AND</span>:{item.unit_details?.prohibition.AND}
              </p>
            </div>

            <Button type="primary" style={{ float: "left", marginTop: "20px" }}>
              <a
                href={`http://www.monash.edu.au/pubs/handbooks/units/${item.code}.html`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Handbook
              </a>
            </Button>
          </div>
        </div>

        <div className="bottom-popup-container">
          <h1 className = "overview-header">Unit Overview</h1>
          {item.unit_details?.overview}
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({ data: state.data }), //映射状态
  { updateValue, updateEvent } //映射操作状态的方法
)(MyCard);
