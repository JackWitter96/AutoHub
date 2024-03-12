import React from 'react';
import '../styles/reviews.css';

const Reviews = () => {
  return (
    <div className="bg-gray-100 reviews">
      <div className="mx-auto p-4">
        <div className='p-4'>
          <h2 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h2>
          <p className="text-2xl mb-6 text-center">
            Explore the favorable influence we've had on our clients by perusing their experiences. Our clients have encountered our services and outcomes, and they're enthusiastic about sharing their positive experiences with you.
          </p>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:justify-center">
          <div className="w-full lg:w-10/12 h-full px-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md h-full review-container">
              <p className="text-gray-800 text-left text-2xl overflow-hidden">
                "Renting from AutoHub was fantastic! Smooth process, diverse options, and top-notch customer service. The staff made sure I got the perfect car for my trip, clean and reliable. AutoHub exceeded my expectations, and I highly recommend them for a hassle-free rental experience."
              </p>
              <div className='flex row-auto pt-2'>
                <img src="./reviews/dee-oh-double-g.png" alt="review one" className="mr-4 rounded-full w-20 h-20" />
                <p className="text-gray-600 text-left">
                  Reviewed by: Dee Oh Double G <br />⭐ ⭐ ⭐ ⭐ ⭐
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-10/12 h-full px-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md h-full review-container">
              <p className="text-gray-800 text-left text-2xl overflow-hidden">
                "Financing my dream car with AutoHub was a breeze. Transparent process, competitive rates, and a personalized approach. The team made sure I understood everything, and the flexible terms fit my budget. Thanks to AutoHub, I now own my dream car with ease."
              </p>
              <div className='flex row-auto pt-2'>
                <img src="./reviews/the-stone.png" alt="review two" className="mr-4 rounded-full w-20 h-20" />
                <p className="text-gray-600 text-left">
                  Reviewed by: The Stone <br />⭐ ⭐ ⭐ ⭐ ⭐
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
