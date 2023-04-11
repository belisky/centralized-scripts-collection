import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addIds } from "../../reducers/GlobalIdsReducer";

interface CollectionCheckerProps {
  id: string;
  isChecked: boolean;
}

const CollectionChecker = ({ id, isChecked }: CollectionCheckerProps) => {
  const [isselected, setIsSelected] = useState(isChecked);
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    setIsSelected((prev) => !prev);
    dispatch(addIds(id));
  };

  return (
    <td className="flex ">
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
