import React, { useState } from "react";

function BookingForm({ updateTimes, availableTimes }) {
  const [selectedDate, setSelectedDate] = useState("");
  
  // Manejar cambio de fecha
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    updateTimes(e.target.value); // Actualizar las horas disponibles
  };

  return (
    <form className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;

