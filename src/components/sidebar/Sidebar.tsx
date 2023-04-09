import React from "react";
import { HiHome } from "react-icons/hi";
import { BiLibrary } from "react-icons/bi";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-1/6 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <p className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <HiHome className=" shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3 shrink-2">Home</span>
            </p>
          </li>
          <li>
            <p className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <BiLibrary className="shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3 shrink-2">Scripts collection</span>
            </p>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
