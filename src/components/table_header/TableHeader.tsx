import React from "react";
import { IColumnType, IData } from "../../lib/types";

interface TableHeaderProps {
  columns: IColumnType<IData>[];
}

const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <tr className="flex flex-row h-12 items-center flex-auto justify-around ">
      {columns.map((column, columnIndex) => (
        <th key={columnIndex} className="flex flex-auto px-5 basis-1/4">
          {column.title}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
