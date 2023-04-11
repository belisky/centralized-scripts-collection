import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosOptions } from "react-icons/io";
import Filtermenu from "../filter_menu/Filtermenu";

interface CustomSearchProps {
  setFilter: (str: string) => void;
  filter: string;
}

const CustomSearch = ({ filter, setFilter }: CustomSearchProps) => {
  // const [searchParam, setSearchParam] = useState("");
  const onChangeSearchParam = (event: any) => {
    const query = event?.target.value;
    // setSearchParam(query);
    setFilter(query);
  };
  // const onClickSearchButton = () => {
  //   onChangeText(searchParam);
  // };
  const [openfilter, setOpenFilter] = useState(false);
  const openFilterMenu = () => {
    setOpenFilter((prev) => !prev);
  };
  return (
    <>
      <div
        className={
          "flex shrink-0 w-3/6 bg-sky-300 rounded-md items-center h-12 dark:bg-gray-700 my-2"
        }
      >
        <BiSearch className="shrink-0 w-6 h-6 ml-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        <input
          type="text"
          className="outline-none flex-grow-3 bg-inherit h-12 text-white ml-3"
          value={filter}
          onChange={onChangeSearchParam}
        />
        {/* <button onClick={onClickSearchButton}>Search</button> */}
        <IoIosOptions
          onClick={openFilterMenu}
          className="shrink-0 w-6 h-6 ml-auto mr-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        />
      </div>
      {openfilter && (
        <Filtermenu openfilter={openfilter} openFilterMenu={openFilterMenu} />
      )}
    </>
  );
};

export default CustomSearch;
