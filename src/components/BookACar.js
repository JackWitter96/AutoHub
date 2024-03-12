import React, { forwardRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMapMarker, faCalendar } from '@fortawesome/free-solid-svg-icons';
import '../styles/bookACar.css';

const BookACar = forwardRef((props, ref) => {

  const [selectedCar, setSelectedCar] = useState('');
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cars = [
    { value: 'car1', label: 'BMW 2 Series GranCoupe', image: '/cars/bmw-2-series-gran-coupe.png', dailyRate: 34 },
    { value: 'car2', label: 'BMW 3 Series Saloon', image: '/cars/bmw-3-series-saloon.png', dailyRate: 40 },
    { value: 'car3', label: 'BMW 5 Series Saloon', image: '/cars/bmw-5-series-saloon.png', dailyRate: 50 },
    { value: 'car4', label: 'BMW i7', image: '/cars/bmw-i7.png', dailyRate: 50 },
    { value: 'car5', label: 'BMW M2 Coupe', image: '/cars/bmw-m2-coupe.png', dailyRate: 55 },
    { value: 'car6', label: 'BMW M5 Competition', image: '/cars/bmw-m5-competition.png', dailyRate: 60 },
  ];

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  };

  const handlePickUpLocationChange = (event) => {
    setPickUpLocation(event.target.value);
  };

  const handleDropOffLocationChange = (event) => {
    setDropOffLocation(event.target.value);
  };

  const handlePickUpDateChange = (event) => {
    setPickUpDate(event.target.value);
  };

  const handleDropOffDateChange = (event) => {
    setDropOffDate(event.target.value);
  };

  const calculateTotalPrice = () => {
    const startDate = new Date(pickUpDate);
    const endDate = new Date(dropOffDate);
    const daysDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    if (daysDifference > 0 && selectedCar) {
      const dailyRateInPounds = cars.find((car) => car.value === selectedCar)?.dailyRate || 0;
      const totalPriceInPounds = daysDifference * dailyRateInPounds;

      return `£${totalPriceInPounds.toFixed(2)}`;
    }

    return '£0.00';
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedCar || !pickUpLocation || !dropOffLocation || !pickUpDate || !dropOffDate) {
      setValidationError('Please fill in all options before searching.');
      return;
    }

    setIsSubmitted(true);
    setValidationError('');
  };

  return (
    <div className="car-selection-section">
      <form onSubmit={handleSubmit}>
        <div className="title-container text-4xl font-bold text-white">
          <h1>Book a Car</h1>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <label className="select-label flex" htmlFor="carSelect">
              <FontAwesomeIcon icon={faCar} className="icon" />
              <span className="text ml-2">Select your car:</span>
            </label>
            <select
              id="carSelect"
              className="select-menu rounded-md"
              onChange={handleCarChange}
              value={selectedCar}
              ref={ref}
            >
              <option value="">Select your car</option>
              {cars.map((car) => (
                <option key={car.value} value={car.value}>
                  {car.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid-item">
            <label className="select-label flex" htmlFor="pick-up-location">
              <FontAwesomeIcon icon={faMapMarker} className="icon" />
              <span className="text ml-2">Select pick-up location:</span>
            </label>
            <select
              id="pick-up-location"
              className="select-menu rounded-md"
              onChange={handlePickUpLocationChange}
              value={pickUpLocation}
              ref={ref}
            >
              <option value="">Select pick-up location</option>
              <option value="Liverpool">Liverpool</option>
              <option value="London">London</option>
              <option value="Manchester">Manchester</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Stockport">Stockport</option>
              <option value="Trafford">Trafford</option>
            </select>
          </div>

          <div className="grid-item">
            <label className="select-label flex" htmlFor="drop-off-location">
              <FontAwesomeIcon icon={faMapMarker} className="icon" />
              <span className="text ml-2">Select drop-off location:</span>
            </label>
            <select
              id="drop-off-location"
              className="select-menu rounded-md"
              onChange={handleDropOffLocationChange}
              value={dropOffLocation}
              ref={ref}
            >
              <option value="">Select drop-off location</option>
              <option value="Liverpool">Liverpool</option>
              <option value="London">London</option>
              <option value="Manchester">Manchester</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Stockport">Stockport</option>
              <option value="Trafford">Trafford</option>
            </select>
          </div>

          <div className="grid-item">
            <label className="select-label flex" htmlFor="pick-up-date">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              <span className="text ml-2">Pick-up Date:</span>
            </label>
            <input
              type="date"
              id="pick-up-date"
              className="select-menu rounded-md"
              onChange={handlePickUpDateChange}
              value={pickUpDate}
              ref={ref}
            />
          </div>

          <div className="grid-item">
            <label className="select-label flex" htmlFor="drop-off-date">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              <span className="text ml-2">Drop-off Date:</span>
            </label>
            <input
              type="date"
              id="drop-off-date"
              className="select-menu rounded-md"
              onChange={handleDropOffDateChange}
              value={dropOffDate}
              ref={ref}
            />
          </div>

          <div className="grid-item">
            <button type="submit" className="submit-button hover:bg-gray-800 hover:text-white">Search</button>
            {validationError && <p className="text-red-500 mt-2">{validationError}</p>}
          </div>
        </div>
      </form>

      {isSubmitted && (
        <div className="selected-values flex flex-col items-center justify-center border p-4">
          <img className='car-display card-display' src={cars.find((car) => car.value === selectedCar)?.image} alt={`Selected Car: ${selectedCar}`} />
          <div className="details-container ml-4">
            <div className="details-grid border-r border-solid text-justify p-4">
              <p className="details-text border-b pb-2 mb-2 text-xl font-bold">Car:</p>
              <p className="details-text border-b pb-2 mb-2 text-xl font-bold">Pick-up Location:</p>
              <p className="details-text border-b pb-2 mb-2 text-xl font-bold">Drop-off Location:</p>
              <p className="details-text border-b pb-2 mb-2 text-xl font-bold">Pick-up Date:</p>
              <p className="details-text border-b pb-2 mb-2 text-xl font-bold">Drop-off Date:</p>
              <p className="details-text border-b pb-2 mb-2 text-xl font-bold">Total Price:</p>
            </div>
            <div className='details-grid ml-2 text-justify'>
              <p className="details-text border-b pb-2 mb-2 text-xl">{cars.find((car) => car.value === selectedCar)?.label}</p>
              <p className="details-text border-b pb-2 mb-2 text-xl">{pickUpLocation}</p>
              <p className="details-text border-b pb-2 mb-2 text-xl">{dropOffLocation}</p>
              <p className="details-text border-b pb-2 mb-2 text-xl">{pickUpDate}</p>
              <p className="details-text border-b pb-2 mb-2 text-xl">{dropOffDate}</p>
              <p className="details-text border-b pb-2 mb-2 text-xl">{calculateTotalPrice()}</p>
            </div>
          </div>
        </div>
      )}


    </div>
  );
});

export default BookACar;
