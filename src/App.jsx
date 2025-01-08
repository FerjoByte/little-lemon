import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';
import BookingPage from './components/BookingPage';

function App() {
  const [availableTimes, setAvailableTimes] = useState([]);

  // Función para actualizar las horas disponibles
  const updateTimes = (selectedDate) => {
    const fetchedTimes = fetchAPI(selectedDate);
    setAvailableTimes(fetchedTimes);
  };

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <CallToAction />
              <Specials />
              <CustomersSay />
              <Chicago />
            </>
          }
        />
        <Route
          path="/booking"
          element={<BookingPage updateTimes={updateTimes} availableTimes={availableTimes} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
