// TableCard.jsx
import React from "react";
import PropTypes from "prop-types";

const TableCard = ({ tableNumber, tableStatus, onClick }) => {
  const cardClassName = `table-card-container ${
    tableStatus === "free"
      ? "free"
      : tableStatus === "reserved"
      ? "reserved"
      : "occupied"
  }`;

  return (
    <div className={cardClassName} onClick={onClick}>
      <div className="table-card-header">
        <span className="table-card-title">Table: {tableNumber}</span>
        <span className="table-card-status">{tableStatus}</span>
      </div>
    </div>
  );
};

TableCard.propTypes = {
  tableNumber: PropTypes.number.isRequired,
  tableStatus: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default TableCard;
