import React, { useState } from "react";
import Dropdown from "../drop_down/Dropdown";
import DatePicker from "react-datepicker";
import { FaRegTimesCircle } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
// import { Value } from "react-date-picker/dist/cjs/shared/types";

interface FilterMenuProps {
  openfilter: boolean;
  openFilterMenu: () => void;
}
interface KeyVal {
  name: string;
}
const Filtermenu = ({ openfilter, openFilterMenu }: FilterMenuProps) => {
  const semester: KeyVal[] = [
    { name: "First-Sem" },
    { name: "Second-Sem" },
    { name: "Trimester" },
  ];
  const [selectedsemester, setSelectedSemester] = useState("");
  const semesterLegend = "Semester";

  const examtype: KeyVal[] = [
    { name: "Mid-Sem" },
    { name: "End-of-Sem" },
    { name: "Supplementary" },
  ];
  const [selectedexamtype, setSelectedExamType] = useState("");
  const examtypeLegend = "Exam-type";

  const academicyear: KeyVal[] = [{ name: "2022/23" }, { name: "2021/2022" }];
  const [selectedacademicyear, setSelectedAcademicYear] = useState("");

  const academicyearLegend = "Year";

  const sessions: KeyVal[] = [
    { name: "Session1" },
    { name: "Session2" },
    { name: "Session3" },
    { name: "Session4" },
    { name: "Session5" },
    { name: "Session6" },
  ];
  const [selectedsession, setSelectedSession] = useState("");
  const sessionLegend = "Session";

  const [pickdate, setPickDate] = useState<any>(new Date());

  return (
    <div
      className={
        !openfilter
          ? "hidden"
          : "w-5/12 fixed bg-white backdrop-blur-sm left-50 top-16 border-2 rounded-lg border-gray-700"
      }
    >
      <span className="flex items-center justify-end m-5">
        <FaRegTimesCircle
          onClick={openFilterMenu}
          className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        />
      </span>

      <div className="flex flex-wrap flex-row ml-5">
        <div className="flex flex-row items-center mr-2">
          <span className="mr-2">Date</span>
          <DatePicker
            selected={pickdate}
            onChange={(date: any) => setPickDate(date)}
          />
        </div>
        <Dropdown
          items={semester}
          selected={selectedsemester}
          setSelected={setSelectedSemester}
          legend={semesterLegend}
        />
        <Dropdown
          items={examtype}
          selected={selectedexamtype}
          setSelected={setSelectedExamType}
          legend={examtypeLegend}
        />
        <Dropdown
          items={academicyear}
          selected={selectedacademicyear}
          setSelected={setSelectedAcademicYear}
          legend={academicyearLegend}
        />
        <Dropdown
          items={sessions}
          selected={selectedsession}
          setSelected={setSelectedSession}
          legend={sessionLegend}
        />
      </div>
    </div>
  );
};

export default Filtermenu;
