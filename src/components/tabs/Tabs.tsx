import React, { useState } from "react";
import {
  BsFillClipboard2CheckFill,
  BsTag,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import CollectScripts from "../collect_scripts/CollectScripts";
import { removeIds } from "../../reducers/GlobalIdsReducer";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";

interface TabProps {
  onChangeTab: (props: number) => void;
  tab: number;
}

const Tabs = ({ onChangeTab, tab }: TabProps) => {
  const dispatch = useAppDispatch();
  const [openscriptCollection, setOpenScriptCollection] = useState(false);
  const openCollectScript = () => {
    setOpenScriptCollection((prev) => !prev);
  };
  const envelopes = useAppSelector((state) => state.envelopes.envelopes);
  const updateGlobalEnvelope = () => {
    console.log(envelopes);
    dispatch(removeIds());
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col ml-auto flex-auto justify-end ">
        <button
          onClick={tab === 1 ? updateGlobalEnvelope : openCollectScript}
          className="flex-auto mb-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded justify-self-end"
        >
          {tab === 1 ? "Update" : "Collect"}
        </button>
        {tab === 2 && (
          <CollectScripts
            openscriptCollection={openscriptCollection}
            openCollectScript={openCollectScript}
          />
        )}
        <span className="flex flex-row items-center">
          <p className="text-sm">1-50 of 2000</p>
          <BsChevronLeft className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-900" />
          <BsChevronRight className="w-6 h-6 ml-3 text-gray-500 transition duration-75 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-900" />
        </span>
      </div>

      <div className="flex h-15 items-center">
        <span
          onClick={() => onChangeTab(1)}
          className={
            tab === 1
              ? "ml-5 flex rounded-lg cursor-pointer items-center p-2 text-base font-normal text-white bg-gray-700"
              : "ml-5   flex cursor-pointer items-center p-2 text-base font-normal dark:hover:text-white rounded-lg dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
          }
        >
          <BiLibrary className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-900" />
          <p>Update Scripts</p>
        </span>
        <span
          onClick={() => onChangeTab(2)}
          className={
            tab === 2
              ? "ml-5 flex rounded-lg cursor-pointer items-center p-2 text-base font-normal text-white bg-gray-700"
              : "ml-5 flex cursor-pointer items-center p-2 text-base font-normal dark:hover:text-white rounded-lg dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
          }
        >
          <BsTag className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <p>Collectable</p>
        </span>
        <span
          onClick={() => onChangeTab(3)}
          className={
            tab === 3
              ? "ml-5 flex rounded-lg cursor-pointer items-center p-2 text-base font-normal text-white bg-gray-700"
              : "ml-5 flex cursor-pointer items-center p-2 text-base font-normal dark:hover:text-white rounded-lg dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700"
          }
        >
          <BsFillClipboard2CheckFill className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <p>Collected</p>
        </span>
      </div>
    </div>
  );
};

export default Tabs;
