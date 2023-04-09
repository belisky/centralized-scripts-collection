import React from "react";

interface dropdownlist {
  name: string;
}
interface DropDownProps {
  items: dropdownlist[];
  selected?: string;
  open?: boolean;
  setOpen?(params: any): void;
  setSelected(params: any): void;
  setItems?(params: any): void;
  legend?: string;
}

const Dropdown = ({
  items,
  selected,
  open,
  legend,
  setOpen,
  setItems,
  setSelected,
}: DropDownProps) => {
  return (
    <div className="flex flex-row items-center justify-start">
      <span className="-mr-3">{legend}</span>
      <select
        className="flex p-2 m-5"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {" "}
        {items.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
