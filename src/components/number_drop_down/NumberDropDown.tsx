import React, { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addEnvelope } from "../../reducers/GlobalEnvReducer";

interface NumberDropDownProps {
  id: string;
  numOfEnv: number;
}

const NumberDropDown = ({ id, numOfEnv }: NumberDropDownProps) => {
  const dispatch = useAppDispatch();
  const [num, setNum] = useState(numOfEnv);
  return (
    <td className="flex flex-auto basis-1/4 ml-5">
      <select
        name="numOfEnvelopes"
        className="flex p-1 my-2"
        onChange={(e) => {
          const newNumber: any = parseInt(e.target.value);
          setNum(newNumber);
          console.log(newNumber);
          console.log(num);
          dispatch(addEnvelope({ id, newNumber }));
        }}
      >
        {[...Array(16)].map((_, i) => (
          <option value={i}>{i}</option>
        ))}
      </select>
    </td>
  );
};

export default NumberDropDown;
