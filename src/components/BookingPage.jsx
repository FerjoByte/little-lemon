import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({ updateTimes, availableTimes }) {
  return (
    <div className="booking-page">
      <h1>Reserve Your Table</h1>
      <BookingForm updateTimes={updateTimes} availableTimes={availableTimes} />
    </div>
  );
}

export default BookingPage;