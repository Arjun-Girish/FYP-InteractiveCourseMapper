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
        console.log(node,'--node');
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
              fontSize: 8,
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
  return <OrganizationGraph data={data} {...config} behaviors={[]} />;
};
export default Tree;
