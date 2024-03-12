import React from 'react';
import '../styles/availableCars.css';

const AvailableCars = () => {
  const carData = [
    { name: 'BMW 2 Series GranCoupe', year: '2023', miles: '3,000', cost: '£50,000', image: '/cars/bmw-2-series-gran-coupe.png', icon: '/carIcons/bmw-icon.png' },
    { name: 'BMW 3 Series Saloon', year: '2024', miles: '2,500', cost: '£45,000', image: '/cars/bmw-3-series-saloon.png', icon: '/carIcons/bmw-icon.png' },
    { name: 'BMW 5 Series Saloon', year: '2022', miles: '7,000', cost: '£55,000', image: '/cars/bmw-5-series-saloon.png', icon: '/carIcons/bmw-icon.png' },
    { name: 'BMW i7', year: '2021', miles: '9,700', cost: '£63,000', image: '/cars/bmw-i7.png', icon: '/carIcons/bmw-i-icon.png' },
    { name: 'BMW M2 Coupe', year: '2020', miles: '14,000', cost: '£60,000', image: '/cars/bmw-m2-coupe.png', icon: '/carIcons/bmw-m-icon.png' },
    { name: 'BMW M5 Competition', year: '2024', miles: '1200', cost: '£85,000', image: '/cars/bmw-m5-competition.png', icon: '/carIcons/bmw-m-icon.png' },
  ];

  return (
    <div>
      <h1 className="text-3xl text-center font-bold bg-gray-100 p-4">Available Cars</h1>
      <div className="available-cars-container flex flex-wrap bg-gray-100">
        {carData.map((car, index) => (
          <div key={index} className="car-item p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-info pl-5">
              <img src={car.icon} alt={car.name} className="w-8 h-8 mb-2 md:w-auto md:h-auto icon" />
              <h3 className='text-left font-bold'>{car.name}</h3>
              <p className='year text-left'><b>Year:</b> {car.year}</p>
              <p className='miles text-left'><b>Miles:</b> {car.miles}</p>
              <p className='cost text-left'><b>Cost:</b> {car.cost}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableCars;
