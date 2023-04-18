import React from "react";
import { IColumnType, IData } from "../../lib/types";

interface TableHeaderProps {
  columns: IColumnType<IData>[];
}

const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <tr className="flex flex-row h-12 items-center flex-auto justify-center">
      {columns.map((column, columnIndex) => {
        if (column.title === "collect") {
          return (
            <th key={columnIndex} className="hidden">
              {column.title}
            </th>
          );
        } else if (column.title === "update") {
          return (
            <th key={columnIndex} className="hidden">
              {column.title}
            </th>
          );
        } else {
          return (
            <th key={columnIndex} className="flex flex-auto px-5 basis-1/4">
              {column.title}
            </th>
          );
        }
      })}
    </tr>
  );
};

export default TableHeader;
