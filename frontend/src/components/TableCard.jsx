// tableCard.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

const TableCard = ({ tableNumber, tableStatus, onClick }) => {
  const [status, setStatus] = useState(tableStatus);

  const toggleStatus = () => {
    const newStatus =
      status === "free"
        ? "reserved"
        : status === "reserved"
        ? "occupied"
        : "free";
    setStatus(newStatus);
  };

  const cardClassName = `table-card-container ${
    status === "free" ? "free" : status === "reserved" ? "reserved" : "occupied"
  }`;

  return (
    <div className={cardClassName} onClick={onClick}>
      <div className="table-card-header">
        <span className="table-card-title">Table: {tableNumber}</span>
        <span className="table-card-status">{status}</span>
      </div>
      <button
        className="toggle-btn"
        onClick={(e) => {
          e.stopPropagation();
          toggleStatus();
        }}
      >
        Toggle Status
      </button>
    </div>
  );
};

TableCard.propTypes = {
  tableNumber: PropTypes.number.isRequired,
  tableStatus: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default TableCard;
