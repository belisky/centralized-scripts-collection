import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addIds } from "../../reducers/GlobalIdsReducer";
import { IData } from "../../lib/types";
import get from "lodash/get";

interface CollectionCheckerProps {
  id: string;
  isChecked?: boolean;
  item: IData;
}

const CollectionChecker = ({ id, isChecked, item }: CollectionCheckerProps) => {
  const checked = get(item, "collected");

  const [isselected, setIsSelected] = useState(checked);
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    setIsSelected((prev) => !prev);
    dispatch(addIds(id));
  };

  return (
    <td className="flex mr-5">
      <input
        type="checkbox"
        value="selectScript"
        checked={isselected}
        onChange={handleOnClick}
      />
    </td>
  );
};

export default CollectionChecker;
