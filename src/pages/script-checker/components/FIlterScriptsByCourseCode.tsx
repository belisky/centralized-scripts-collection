import { useState } from "react";

type FilterScriptsCourseCode = {
    filterByCourseCode: (filterParam: string) => void;
};

export default function FilterScriptsCourseCode({
    filterByCourseCode,
}: FilterScriptsCourseCode) {
    const [filter, setFilter] = useState<string>("");
    return (
        <div className="filter-box script-checker-page-container">
            <p className="filter-box-head-text">Find scripts by course code</p>
            <div className="input-box">
                <input
                    type="text"
                    name=""
                    id=""
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value);
                        filterByCourseCode(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}
