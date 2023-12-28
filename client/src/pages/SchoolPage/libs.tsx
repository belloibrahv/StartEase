import { Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SchoolsTypes } from "./types";

export const columns: ColumnsType<SchoolsTypes> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => <a key={record.id}>{text}</a>,
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space key={record.id} size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];
