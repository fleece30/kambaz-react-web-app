import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

function AssignmentButtons() {
  return (
    <div className="float-end ps-2">
      <span className="border border-dark p-2 rounded-pill me-2">
        40% of total
      </span>
      <FaPlus className="me-2 fs-3 ms-2" />
      <CiMenuKebab className="me-2 fs-3" />
    </div>
  );
}

export default AssignmentButtons;
