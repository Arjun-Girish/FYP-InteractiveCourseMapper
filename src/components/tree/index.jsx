// import { FundFlowGraph } from "@ant-design/graphs";
// const Tree = (props) => {
//   const { data } = props;
//   // const data = {
//   //   nodes: [
//   //     {
//   //       id: "-1",
//   //       value: {
//   //         text: "ENG1013",
//   //       },
//   //     },
//   //     {
//   //       id: "0",
//   //     },
//   //     {
//   //       id: "1",
//   //       value: {
//   //         text: "ENG1005",
//   //       },
//   //     },
//   //     {
//   //       id: "2",
//   //       value: {
//   //         text: "ENG1814",
//   //       },
//   //     },
//   //     {
//   //       id: "3",
//   //       value: {
//   //         text: "ENG1006",
//   //       },
//   //     },
//   //   ],
//   //   edges: [
//   //     {
//   //       source: "-1",
//   //       target: "0",
//   //       value: {text:"or"},
//   //     },
//   //     {
//   //       source: "-1",
//   //       target: "1",
//   //       value: {text:"and"},
//   //     },
//   //     {
//   //       source: "0",
//   //       target: "2",
//   //     },
//   //     {
//   //       source: "0",
//   //       target: "3",
//   //     },
//   //   ],
//   // };
//   const config = {
//     data,
//     isAutoCenter: true,
//     layout: {
//       rankdir: "BT",
//       ranksepFunc: () => 20,
//     },
//     nodeCfg: {
//       size: [80, 40],
//       anchorPoints: [
//         [0.5, 0],
//         [0.5, 1],
//       ],
//       style: (node) => {
//         return node.value
//           ? {
//               fill: "#eeece1",
//               stroke: "#eeece1",
//               radius: 5, // 设置节点圆角半径
//             }
//           : {
//               fill: "transparent",
//               width: 1,
//               radius: 1.5,
//               stroke: "#www",
//             };
//       },
//       label: {
//         style: (node, group, type) => {
//           const styles = {
//             name: {
//               fill: "#000",
//               fontSize: 20,
//             },
//           };
//           return styles[type];
//         },
//       },
//     },
//     edgeCfg: {
//       label: {
//         style: {
//           position: "bottom",
//           fill: "#000",
//           fontSize: 16,
//           fillOpacity: 1,
//         },
//       },
//       type: "polyline",
//       endArrow: false,
//       style: (edge) => {
//         const stroke = edge.target === "1" ? "#aaa" : "#www";
//         return { stroke, lineWidth: "2" };
//       },
//     },
//     behaviors: [],
//   };

//   return <FundFlowGraph {...config} />;
// };
// export default Tree;
import { OrganizationGraph } from "@ant-design/graphs";

const Tree = (props) => {
  const {data}=props
  // const data = {
  //   id: "root",
  //   value: {
  //     name: "ENG2005",
  //   //   title: "Advanced\nengineering\nmathematics",
  //     title: "math",
  //   },
  //   children: [
  //     {
  //       children: [
  //         {
  //           id: "c1-1",
  //           value: {
  //             name: "ENG3111",
  //             name1:"or"
  //           },
  //         },
  //         {
  //           id: "c1-2",
  //           value: {
  //             name: "ENG1003",
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       id: "c2",
  //       value: {
  //         name: "ENG1001",
  //       },
  //     },
  //   ],
  // };
  const config = {
    nodeCfg: {
      size: [80, 50],
      style: (node) => {
        return node.value?{
          fill: "#eeece1",
          stroke: "#eeece1",
        }:{
            fill: 'transparent',
            width:1,
            radius: 1.5,
            stroke: "#000",
        };
      },
      label: {
        style: (node, group, type) => {
          const styles = {
            title: {
              fill: "#000",
              fontSize: 5,
            },
            name: {
              fill: "#000",
              fontSize: 8,
            },
          };
          return styles[type];
        },
      },
    },
    edgeCfg: {
      type: "polyline",
      style: {
        stroke: "block",
        lineWidth:'2',
        endArrow: false,
      },
    },
    layout: {
      direction: "BT",
    },
  };
  return <OrganizationGraph data={data} {...config} behaviors={['drag-canvas', 'zoom-canvas']} />;
};
export default Tree;
