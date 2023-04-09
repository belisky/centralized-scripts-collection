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
          className="flex h-8 text-sm px-5 flex-row flex-auto items-center justify-around w-full even:bg-blue-200 odd:bg-blue-100"
        >
          {columns.map((column, columnIndex) => (
            <TableRowItem
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
          {checker === "update" && (
            <td className="flex flex-auto basis-1/4 ml-5">
              <select
                name="numOfEnvelopes"
                className="flex p-1 my-2"
                // value={numOfEnv}
                // onChange={e => setNumOfEnv(e.target.value)}
              >
                {[...Array(15)].map((_, i) => (
                  <option value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </td>
          )}
          {checker === "collect" && (
            <td className="flex ">
              <input type="checkbox" />
            </td>
          )}
        </tr>
      ))}
    </>
  );
};

export default TableRow;
