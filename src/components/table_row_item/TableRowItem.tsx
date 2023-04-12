import React from "react";
import { IColumnType, IData } from "../../lib/types";
import get from "lodash/get";

interface TableRowItemProps<T> {
  item: T;
  column: IColumnType<T>;
}

const TableRowItem = ({ item, column }: TableRowItemProps<IData>) => {
  const value = get(item, column.key);
  return <td className="flex flex-auto basis-1/4 ml-10">{value}</td>;
};

export default TableRowItem;
