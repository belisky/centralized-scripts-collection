import React from "react";
import { IColumnType, IData } from "../../lib/types";
import NumberDropDown from "../number_drop_down/NumberDropDown";
import CollectionChecker from "../collection_checker/CollectionChecker";
import get from "lodash/get";

interface TableRowItemProps<T> {
  item: T;
  column: IColumnType<T>;
}

const TableRowItem = ({ item, column }: TableRowItemProps<IData>) => {
  const value = get(item, column.key);
  if (column.key === "update") {
    return (
      <NumberDropDown id={item._id as string} key={item._id} item={item} />
    );
  } else if (column.key === "collect") {
    return (
      <CollectionChecker id={item._id as string} key={item._id} item={item} />
    );
  } else if (column.key === "signatureUrl") {
    return (
      <td className="flex flex-auto basis-1/4 ml-10" key={item._id}>
        <img src={value} alt="signature" className="w-12 h-8" />
      </td>
    );
  } else {
    return (
      <td className="flex flex-auto basis-1/4 ml-10" key={item._id}>
        {value}
      </td>
    );
  }
};

export default TableRowItem;
