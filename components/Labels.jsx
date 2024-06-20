import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);

  const labelColors = {
    indigo: "bg-indigo-500",
    gray: "bg-gray-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
  };

  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              updateLabel({ label: lbl, checked: !checked })
            }
            className={`form-checkbox h-5 w-5 rounded focus:ring-0 cursor-pointer ${labelColors[lbl]}`}
          />
          <span className="ml-2 text-gray-500 capitalize">{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  );
}
