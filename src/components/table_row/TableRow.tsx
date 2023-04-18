import React, { useState } from "react";
import { IColumnType, IData } from "../../lib/types";
import TableRowItem from "../table_row_item/TableRowItem";
import NumberDropDown from "../number_drop_down/NumberDropDown";
import CollectionChecker from "../collection_checker/CollectionChecker";

interface TableRowProps<IData> {
  data: IData[];
  columns: IColumnType<IData>[];
  checker?: string;
}

const TableRow = ({ data, columns, checker }: TableRowProps<IData>) => {
  const [envNum, setEnvNum] = useState(
    data.map((element) => element.numOfEnvelopes)
  );
  const [check, setCheck] = useState(data.map((element) => element.collected));

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
          {/* {checker === "update" && (
            <NumberDropDown
              id={item._id as string}
              numOfEnv={envNum[itemIndex] as number}
              key={`table-body-${itemIndex}`}
              item={item}
            />
          )}
          {checker === "collect" && (
            <CollectionChecker
              id={item._id as string}
              isChecked={check[itemIndex] as boolean}
              key={`table-body-${itemIndex}`}
              item={item}
            />
          )} */}
        </tr>
      ))}
    </>
  );
};

export default TableRow;
