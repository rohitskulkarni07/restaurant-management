// components/Modal.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import StatusDropdown from "./StatusDropdown";
import ReservationForm from "./ReservationForm";

const Modal = ({
  isOpen,
  onClose,
  tableNumber,
  tableStatus,
  onToggleClick,
}) => {
  const [newStatus, setNewStatus] = useState(tableStatus);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem(`reservation_${tableNumber}`);
    return savedData ? JSON.parse(savedData) : { name: "", datetime: "" };
  });

  useEffect(() => {
    setNewStatus(tableStatus);
    checkSaveEnabled(tableStatus);
  }, [tableStatus]);

  useEffect(() => {
    setIsSaveEnabled(!!(formData.name && formData.datetime));
  }, [formData]);

  const handleDropdownChange = (value) => {
    setNewStatus(value);
    checkSaveEnabled(value);
  };

  const checkSaveEnabled = (status) => {
    const reservationData = JSON.parse(
      localStorage.getItem(`reservation_${tableNumber}`)
    );
    const isReservationFormIncomplete =
      status === "reserved" &&
      (!reservationData || !reservationData.name || !reservationData.datetime);

    setIsSaveEnabled(!isReservationFormIncomplete);
  };

  const handleUpdateAndClose = () => {
    if (!formData.name || !formData.datetime) {
      alert("Name and Date are mandatory fields");
      return;
    }

    if (newStatus === "free") {
      localStorage.removeItem(`reservation_${tableNumber}`);
      onToggleClick(newStatus);
      onClose();
      localStorage.setItem(`modalState_${tableNumber}`, newStatus);
    } else {
      onToggleClick(newStatus);
      onClose();
      localStorage.setItem(`modalState_${tableNumber}`, newStatus);
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="invoice-header">
          <h2>Table Number: #{tableNumber}</h2>
          <p className={newStatus}>
            Status:
            <StatusDropdown
              onChange={handleDropdownChange}
              newStatus={newStatus}
            />
          </p>
        </div>
        {newStatus === "reserved" && (
          <ReservationForm
            tableNumber={tableNumber}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        <div className="invoice-details">
          {/* Additional details go here */}
        </div>
        <div className="invoice-total">{/* ... */}</div>
        <button
          className="btn-primary"
          onClick={handleUpdateAndClose}
          disabled={!isSaveEnabled}
        >
          Close & Update
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  tableNumber: PropTypes.number.isRequired,
  tableStatus: PropTypes.string.isRequired,
  onToggleClick: PropTypes.func,
};

export default Modal;
