import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ updateTimes, availableTimes, submitForm }) {
  return (
    <BookingForm
      updateTimes={updateTimes}
      availableTimes={availableTimes}
      submitForm={submitForm} // Pasa la función submitForm como prop
    />
  );
}

export default BookingPage;