import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { addEnvelope } from "../../reducers/GlobalEnvReducer";

interface NumberDropDownProps {
  id: string;
  numOfEnv: number;
}

const NumberDropDown = ({ id, numOfEnv }: NumberDropDownProps) => {
  const dispatch = useAppDispatch();
  const [num, setNum] = useState(numOfEnv);
  const [stdpresent, setStdPresent] = useState(0);

  const env = useAppSelector((state) => state.envelopes.envelopes);
  const onChangeStdPresent = (e: any) => {
    e.preventDefault();
    setStdPresent(e.target.value);
    const stdNum = e.target.value;
    dispatch(
      addEnvelope({
        scriptId: id,
        numOfEnvelopes: num,
        numOfStudents: stdNum,
      })
    );
  };
  return (
    <>
      <td className="flex flex-auto basis-1/4 mr-15">
        <input
          type="number"
          className="mr-15 flex p-1 my-2 rounded-md"
          onChange={onChangeStdPresent}
        />
      </td>

      <td className="flex flex-auto basis-1/4 ml-25">
        <select
          name="numOfEnvelopes"
          className="flex p-1 my-2"
          onChange={(e) => {
            const newNumber: any = parseInt(e.target.value);
            setNum(newNumber);

            dispatch(
              addEnvelope({
                scriptId: id,
                numOfEnvelopes: newNumber,
                numOfStudents: stdpresent,
              })
            );
          }}
        >
          {[...Array(16)].map((_, i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </td>
    </>
  );
};

export default NumberDropDown;
