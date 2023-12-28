import { FC } from "react";
import { Table as AntTable } from "antd";
import { TableType } from "components/Table/types";

const Table: FC<TableType> = ({ columns, data }) => (
  <AntTable columns={columns} dataSource={data} />
);

export default Table;
