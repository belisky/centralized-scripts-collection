import React, { useState } from "react";
import { IColumnType, IData } from "../../lib/types";
import ReactPaginate from "react-paginate";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import CustomSearch from "../custom_search/CustomSearch";
import Tabs from "../tabs/Tabs";

import Table from "../table/Table";

interface UpdateScriptsProps {
  scripts: IData[];

  setTab: (num: number) => void;
  tab: number;
}

const columns: IColumnType<IData>[] = [
  {
    key: "courseCode",
    title: "Course Code",
  },
  {
    key: "class",
    title: "Class",
  },
  {
    key: "numOfenvelopes",
    title: "#Envelopes",
  },
];
const checker: string = "update";

const UpdateScripts = ({ scripts, setTab, tab }: UpdateScriptsProps) => {
  const [papers, setPapers] = useState(scripts);
  const [envelopeNumber, setEnvelopeNumber] = useState([
    { id: "", numOfEnv: 0 },
  ]);

  // const updateEnvelopeNumbers=(id:number)

  const [filterstring, setFilterString] = useState("");
  const [filterdate, setFilterDate] = useState(new Date());

  const filterPapersByDate = (dateString: Date) => {
    setFilterDate(dateString);
    console.log(dateString);
    const searchList = scripts.filter((paper) => {
      return new Date(Date.parse(paper.date as string)) === dateString;
    });
    setPapers(searchList);
  };

  const filterPapersByString = (filterParam: string) => {
    setFilterString(filterParam);
    const searchList = scripts.filter((paper) => {
      return paper.courseCode.toLowerCase().includes(filterParam.toLowerCase());
    });
    setPapers(searchList);
  };

  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const endOffset = itemOffset + 25;

  const currentItems = papers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(papers.length / 25);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 25) % papers.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    setCurrentPage(event.selected);
  };
  const showNextButton = currentPage !== pageCount - 1;
  const showPrevButton = currentPage !== 0;

  // const filterPapersByDate = (filterParam: string) => {
  //   setPapers(scripts.filter(paper => paper.date.includes(filterParam)))
  // }

  // const filterPapersBySession = (filterParam: string) => {
  //   setPapers(scripts.filter(paper => paper.session.includes(filterParam)))
  // }
  return (
    <>
      <CustomSearch
        filter={filterstring}
        setFilter={filterPapersByString}
        filterdate={filterdate}
        filterPapersByDate={filterPapersByDate}
      />
      <Tabs onChangeTab={setTab} tab={tab} />
      <Table data={currentItems} columns={columns} checker={checker} />
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          showNextButton ? (
            <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md">
              <BsChevronRight />
            </span>
          ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={
          showPrevButton ? (
            <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md mr-4">
              <BsChevronLeft />
            </span>
          ) : null
        }
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block border-2 border-gray-200 hover:bg-gray-200 w-10 h-10 flex items-center justify-center rounded-md mr-4"
        activeClassName="bg-blue-300 text-white"
      />
    </>
  );
};

export default UpdateScripts;
