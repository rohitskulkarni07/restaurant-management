// components/Tables.jsx

import React, { useState, useEffect } from "react";
import TableCard from "./TableCard";
import Modal from "./Modal";

const Tables = () => {
  const tableCount = 25;
  const initialTablesArray = Array.from({ length: tableCount }, (_, index) => ({
    tableNumber: index + 1,
    tableStatus: "free",
  }));

  // Function to get the initial state from local storage or use the default state
  const getInitialTablesState = () => {
    const savedState = JSON.parse(localStorage.getItem("tablesState"));
    return savedState || initialTablesArray;
  };

  const [tablesArray, setTablesArray] = useState(getInitialTablesState);
  const [selectedTable, setSelectedTable] = useState(null);

  const openModal = (tableNumber, tableStatus) => {
    setSelectedTable({ tableNumber, tableStatus });
  };

  const closeModal = () => {
    setSelectedTable(null);
  };

  const toggleStatus = (status) => {
    if (selectedTable) {
      const newStatus = status;
      const updatedTablesArray = tablesArray.map((table) =>
        table.tableNumber === selectedTable.tableNumber
          ? { ...table, tableStatus: newStatus }
          : table
      );

      setTablesArray(updatedTablesArray);
      setSelectedTable((prev) => ({ ...prev, tableStatus: newStatus }));

      // Save the updated state to local storage
      localStorage.setItem("tablesState", JSON.stringify(updatedTablesArray));
    }
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
      {selectedTable && (
        <Modal
          isOpen={selectedTable !== null}
          onClose={closeModal}
          tableNumber={selectedTable?.tableNumber}
          tableStatus={selectedTable?.tableStatus}
          onToggleClick={toggleStatus}
        />
      )}
    </div>
  );
};

export default Tables;
