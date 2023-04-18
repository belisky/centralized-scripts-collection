import { useState, useRef } from "react";
import { IScript } from "../../../lib/types";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ScriptTableRow from "./ScriptTableRow";

type ScriptsTableProps = {
    scripts: IScript[];
    removeFromSeen: (scriptID: string) => void;
};

export default function SeenScriptsTable({
    scripts,
    removeFromSeen,
}: ScriptsTableProps) {
    const SCRIPTS = scripts.sort((a, b) => a.session - b.session);
    // const [itemOffset, setItemOffset] = useState(0);
    // const [currentPage, setCurrentPage] = useState(1);

    // const endOffset = itemOffset + 8;

    // const currentItems = SCRIPTS.slice(itemOffset, endOffset);
    // const pageCount = Math.ceil(SCRIPTS.length / 8);

    // Invoke when user click to request another page.
    // const handlePageClick = (event: any) => {
    //     const newOffset = (event.selected * 8) % SCRIPTS.length;

    //     setItemOffset(newOffset);
    //     setCurrentPage(event.selected);
    // };
    // const showNextButton = currentPage !== pageCount - 1;
    // const showPrevButton = currentPage !== 0;

    return (
        <>
            <table className="script-checker-table">
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Class</th>
                        <th>Session</th>
                        <th>Rooms</th>
                        <th>To Print</th>
                        <th>Seen</th>
                    </tr>
                </thead>
                <tbody className="script-checker-table-body">
                    {SCRIPTS.map((script) => (
                        <ScriptTableRow
                            script={script}
                            key={`${script.class}-${script.courseCode}`}
                            onCheck={removeFromSeen}
                        />
                    ))}
                </tbody>
            </table>
            {/* <ReactPaginate
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
            /> */}
        </>
    );
}
