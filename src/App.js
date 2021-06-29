import "antd/dist/antd.css";
import { Table } from "antd";

function App() {
  const columns = [
    {
      title: "Sticky Legend",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Top 1",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Top 2",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Top 3",
      dataIndex: "address",
      key: "3",
      width: 150,
    },
    {
      title: "Top 4",
      dataIndex: "address",
      key: "4",
      width: 150,
    },
    {
      title: "Top 5",
      dataIndex: "address",
      key: "5",
      width: 150,
    },
    {
      title: "Top 6",
      dataIndex: "address",
      key: "6",
      width: 150,
    },
    {
      title: "Top 7",
      dataIndex: "address",
      key: "7",
      width: 150,
    },
    { title: "Top 8", dataIndex: "address", key: "8" },
    { title: "Top 9", dataIndex: "address", key: "9" },
    { title: "Top 10", dataIndex: "address", key: "10" },
  ];

  const data = [];
  for (var i = 0; i < 10; i++) {
    data.push({
      name: `Left ${i}`,
      address: `T${i}:L${i}`,
    });
  }

  return (
    <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: 1500, y: 300 }} />
  );
}

export default App;
