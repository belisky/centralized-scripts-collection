import React from "react";
import { IColumnType, IData } from "../../lib/types";
import TableRowItem from "../table_row_item/TableRowItem";

interface TableRowProps<IData> {
  data: IData[];
  columns: IColumnType<IData>[];
  checker?: string;
}

const TableRow = ({ data, columns, checker }: TableRowProps<IData>) => {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr
          key={`table-body-${itemIndex}`}
          className="flex flex-row h-12 items-center flex-auto justify-around even:bg-blue-200 odd:bg-blue-100"
        >
          {columns.map((column, columnIndex) => (
            <TableRowItem
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableRow;
