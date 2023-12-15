// Tables.jsx
import React, { useState } from "react";
import TableCard from "./TableCard";
import Modal from "./Modal";

const Tables = () => {
  const tableCount = 25;
  const tablesArray = Array.from({ length: tableCount }, (_, index) => ({
    tableNumber: index + 1,
    tableStatus: "free", // Set the default status to "free"
  }));

  const [selectedTable, setSelectedTable] = useState(null);

  const openModal = (tableNumber, tableStatus) => {
    setSelectedTable({ tableNumber, tableStatus });
  };

  const closeModal = () => {
    setSelectedTable(null);
  };

  return (
    <div className="tables-scroll-container">
      <div className="tables-container">
        {tablesArray.map((table) => (
          <TableCard
            key={table.tableNumber}
            tableNumber={table.tableNumber}
            tableStatus={table.tableStatus}
            onClick={() => openModal(table.tableNumber, table.tableStatus)}
          />
        ))}
      </div>
      <Modal
        isOpen={selectedTable !== null}
        onClose={closeModal}
        tableNumber={selectedTable?.tableNumber}
        tableStatus={selectedTable?.tableStatus}
      />
    </div>
  );
};

export default Tables;
