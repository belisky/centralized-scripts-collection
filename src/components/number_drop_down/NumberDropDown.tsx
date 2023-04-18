import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { addEnvelope } from "../../reducers/GlobalEnvReducer";

import { IData } from "../../lib/types";
import get from "lodash/get";

interface NumberDropDownProps {
  item: IData;
  id: string;
  numOfEnv?: number;
}

const NumberDropDown = ({ id, numOfEnv, item }: NumberDropDownProps) => {
  const dispatch = useAppDispatch();
  const envs = get(item, "numOfEnvelopes");
  const envN = envs?.toString();

  const studentsNumber = get(item, "numOfStudents");

  // console.log(envs);
  const [numOfEnvelopes, setNumOfEnvelopes] = useState(envN || "");
  const [numOfStudents, setNumOfStudents] = useState(studentsNumber || "");

  // const env = useAppSelector((state) => state.envelopes.envelopes);
  const onChangeStdPresent = (e: any) => {
    e.preventDefault();
    setNumOfStudents(e.target.value);
    const stdNum = parseInt(e.target.value);
    // console.log("std", numOfStudents, stdNum, num);
    dispatch(
      addEnvelope({
        scriptId: id,
        numOfEnvelopes: parseInt(numOfEnvelopes),
        numOfStudents: stdNum,
      })
    );
  };
  const onChangeEnv = (e: any) => {
    e.preventDefault();
    setNumOfEnvelopes(e.target.value);
    const env = parseInt(e.target.value);
    // console.log("env", num, stdpresent);
    dispatch(
      addEnvelope({
        scriptId: id,
        numOfEnvelopes: env,
        numOfStudents: parseInt(numOfStudents),
      })
    );
  };
  return (
    <>
      <td key={`${item._id}1`} className="flex flex-auto basis-1/4">
        <input
          type="number"
          className="flex p-1 my-2 rounded-md"
          onChange={onChangeStdPresent}
          value={numOfStudents}
        />
      </td>

      <td key={item._id} className="flex flex-auto basis-1/4 ">
        <select
          name="numOfEnvelopes"
          className="flex p-1 my-2"
          onChange={onChangeEnv}
          value={numOfEnvelopes}
        >
          {[...Array(20)].map((_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </td>
    </>
  );
};

export default NumberDropDown;
