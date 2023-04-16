type FilterScriptsByDateProps = {
    dates: string[];
    filterByDate: (date: string) => void;
};

export default function FilterScriptsByDate({
    dates,
    filterByDate,
}: FilterScriptsByDateProps) {
    return (
        <div className="filter-box script-checker-page-container">
            <p className="filter-box-head-text">Select Date to filter</p>
            <div className="input-box">
                <select
                    name=""
                    id=""
                    onChange={(e) => {
                        filterByDate(e.target.value);
                    }}
                >
                    <option>Select date</option>
                    {dates.map((date) => (
                        <option value={date} key={date}>
                            {date}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
