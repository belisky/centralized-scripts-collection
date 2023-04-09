import React from "react";
import TableHeader from "../table_header/TableHeader";
import TableRow from "../table_row/TableRow";
import { IColumnType, IData } from "../../lib/types";

interface TableProps<T> {
  data: T[];
  columns: IColumnType<T>[];
  checker?: string;
}

const Table = ({ data, columns, checker }: TableProps<IData>) => {
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
