import React, { useState } from "react";

const Input = () => {
  const [academicyear, setAcademicYear] = useState("2022/23");
  const onChangeText = (e: any) => {
    setAcademicYear(e.target.value);
  };

  return (
    <div className="flex flex-col text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <label htmlFor="year" className="">
        Eg:2022/23
      </label>
      <input
        id="year"
        type="text"
        placeholder="Academic year"
        value={academicyear}
        onChange={onChangeText}
      />
    </div>
  );
};

export default Input;
