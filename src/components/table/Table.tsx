import React from "react";
import TableHeader from "../table_header/TableHeader";
import TableRow from "../table_row/TableRow";
import { IColumnType, IData } from "../../lib/types";

interface TableProps {
  data: IData[];
  columns: IColumnType<IData>[];
  checker?: string;
}

const Table = ({ data, columns, checker }: TableProps) => {
  return (
    <table className="table-auto">
      <thead>
        <TableHeader columns={columns} />
      </thead>
      <tbody className="flex flex-col">
        <TableRow data={data} columns={columns} checker={checker} />
      </tbody>
    </table>
  );
};

export default Table;
