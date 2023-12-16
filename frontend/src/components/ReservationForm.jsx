// components/ReservationForm.jsx
import React, { useState, useEffect } from "react";

const ReservationForm = ({ tableNumber, formData, setFormData }) => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsEditing(false);
  }, [tableNumber]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const formatDatetime = (datetime) => {
    const dateObj = new Date(datetime);
    const formattedDatetime = dateObj.toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return formattedDatetime;
  };

  const handleFormClick = () => {
    setIsEditing(true);
  };

  return (
    <div
      className={`reservation-form ${isEditing ? "editing" : ""}`}
      onClick={handleFormClick}
    >
      {isEditing ? (
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Date and Time:
            <input
              type="datetime-local"
              name="datetime"
              value={formData.datetime}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </label>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Date and Time:</strong> {formatDatetime(formData.datetime)}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
