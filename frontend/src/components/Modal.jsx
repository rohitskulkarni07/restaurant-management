// Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, tableNumber, tableStatus }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="invoice-header">
          <h2>Restaurant Invoice</h2>
          <p>Table Number: {tableNumber}</p>
          <p>Status: {tableStatus}</p>
        </div>
        <div className="invoice-details">
          {/* Additional details go here */}
          <div className="item">
            <span>Item 1</span>
            <span>$10.00</span>
          </div>
          <div className="item">
            <span>Item 2</span>
            <span>$15.00</span>
          </div>
          {/* Add more items as needed */}
        </div>
        <div className="invoice-total">
          <span>Total:</span>
          <span>$25.00</span>
        </div>
        <button className="btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
