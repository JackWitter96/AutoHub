import React, { useState } from 'react';
import '../styles/financeOptions.css';

const FinanceOptions = () => {
    const [selectedCar, setSelectedCar] = useState(null);
    const [financeTerm, setFinanceTerm] = useState(12);
    const [depositAmount, setDepositAmount] = useState(1000);
    const [pcpCalculatorPopupVisible, setPcpCalculatorPopupVisible] = useState(false);
    const [hpCalculatorPopupVisible, setHpCalculatorPopupVisible] = useState(false);
    const [financeResults, setFinanceResults] = useState(null);

    const carData = [
        { name: 'BMW 2 Series GranCoupe', cost: 50000 },
        { name: 'BMW 3 Series Saloon', cost: 45000 },
        { name: 'BMW 5 Series Saloon', cost: 55000 },
        { name: 'BMW i7', cost: 63000 },
        { name: 'BMW M2 Coupe', cost: 60000 },
        { name: 'BMW M5 Competition', cost: 85000 },
    ];

    const clearFinanceData = () => {
        setSelectedCar(null);
        setFinanceTerm(12);
        setDepositAmount(1000);
        setFinanceResults(null);
    };

    const handleCarSelect = (car) => {
        setSelectedCar(car);
    };

    const handleFinanceTermChange = (term) => {
        setFinanceTerm(term);
    };

    const handleDepositChange = (amount) => {
        setDepositAmount(amount);
    };

    function formatCurrency(value) {
        if (typeof value === 'string') {
            return value;
        } else if (typeof value === 'number') {
            return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);
        } else {
            return value;
        }
    }

    const pcpCalculateFinance = () => {
        if (selectedCar) {
            const cost = selectedCar.cost;
            const financedAmount = cost - depositAmount;
            const finalPaymentPercentages = {
                12: 0.20,
                24: 0.15,
                36: 0.10,
                48: 0.05,
            };
            const monthlyInterestRate = 11.9 / 100 / 12;
            const monthlyPayment = (financedAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -financeTerm));
            const totalAmountPayable = monthlyPayment * financeTerm + depositAmount;
            const finalPaymentPercentage = finalPaymentPercentages[financeTerm] || 0;
            const finalPayment = cost * finalPaymentPercentage;
            const totalInterestPayable = totalAmountPayable - financedAmount;
            setFinanceResults({
                carPrice: formatCurrency(cost.toFixed(2)),
                monthlyPayment: formatCurrency(monthlyPayment.toFixed(2)),
                totalAmountPayable: formatCurrency(totalAmountPayable.toFixed(2)),
                optionalFinalPayment: formatCurrency(finalPayment.toFixed(2)),
                totalInterestPayable: formatCurrency(totalInterestPayable.toFixed(2)),
            });
            setPcpCalculatorPopupVisible(true);
        }
    };

    const hpCalculateFinance = () => {
        if (selectedCar) {
            const cost = selectedCar.cost;
            const financedAmount = cost - depositAmount;
            const monthlyInterestRate = 13 / 100 / 12;
            const monthlyPayment = (financedAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -financeTerm));
            const totalAmountPayable = monthlyPayment * financeTerm + depositAmount;
            const totalInterestPayable = totalAmountPayable - financedAmount;
            setFinanceResults({
                carPrice: formatCurrency(cost.toFixed(2)),
                monthlyPayment: formatCurrency(monthlyPayment.toFixed(2)),
                totalAmountPayable: formatCurrency(totalAmountPayable.toFixed(2)),
                totalInterestPayable: formatCurrency(totalInterestPayable.toFixed(2)),
            });
            setHpCalculatorPopupVisible(true);
        }
    };


    const togglePcpCalculatorPopup = () => {
        setPcpCalculatorPopupVisible(!pcpCalculatorPopupVisible);
        if (!pcpCalculatorPopupVisible) {
            clearFinanceData();
        }
    };

    const toggleHpCalculatorPopup = () => {
        setHpCalculatorPopupVisible(!hpCalculatorPopupVisible);
        if (!hpCalculatorPopupVisible) {
            clearFinanceData();
        }
    };

    return (
        <div className='finance-options'>
            <div className="finance-options-row flex items-center justify-center">
                <div className="image-container">
                    <img src="./financeImages/finance-image-one.jpg" alt="Finance Option" />
                </div>
                <div className="info-container ml-4">
                    <p className="text-left text-xl description-text">Explore flexible finance options.</p>
                    <p className="text-left text-3xl description-text">Choose the plan that suits you best.</p>
                    <div className='flex space-x-4 finance-button'>
                        <button className="submit-button hover:bg-gray-800 hover:text-white text-left block" onClick={togglePcpCalculatorPopup}>PCP Calculator</button>
                        {pcpCalculatorPopupVisible && (
                            <div>
                                <div className="popup">
                                    <div className="finance-calculator">
                                        <h2 className='text-2xl p-4'>Finance Calculator</h2>
                                        <div className="table-container flex flex-col items-center">
                                            <div className="table-row flex-1 mx-2">
                                                <div className="table-cell">
                                                    <select
                                                        onChange={(e) => handleCarSelect(JSON.parse(e.target.value))}
                                                        className="border rounded p-2 w-full finance-options-button"
                                                    >
                                                        <option value="">Select a car</option>
                                                        {carData.map((car, index) => (
                                                            <option key={index} value={JSON.stringify(car)}>
                                                                {car.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="table-row flex-1 mx-2">
                                                <div className="table-cell">
                                                    <select
                                                        onChange={(e) => handleFinanceTermChange(parseInt(e.target.value))}
                                                        className="border rounded m-2 p-2 w-full finance-options-button"
                                                    >
                                                        <option value={12}>12 months</option>
                                                        <option value={24}>24 months</option>
                                                        <option value={36}>36 months</option>
                                                        <option value={48}>48 months</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="table-row flex-1 mx-2">
                                                <div className="table-cell">
                                                    <select
                                                        onChange={(e) => handleDepositChange(parseInt(e.target.value))}
                                                        className="border rounded m-2 p-2 w-full finance-options-button"
                                                    >
                                                        {[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000].map((amount, index) => (
                                                            <option key={index} value={amount}>
                                                                £{amount}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="table-row flex-1 mx-2">
                                                <div className="table-cell">
                                                    <button onClick={pcpCalculateFinance} className="border rounded p-2 w-full finance-options-button">Calculate</button>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className='text-2xl p-4'>Finance Calculator Results</h2>
                                        <div className="table-container flex flex-col">
                                            <div className="flex justify-between">
                                                <div className="text-left">Car Price:</div>
                                                <div className="text-right">£{selectedCar?.cost || 'N/A'}</div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="text-left">Monthly Payment:</div>
                                                <div className="text-right">£{financeResults?.monthlyPayment || 'N/A'}</div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="text-left">Total Amount Payable:</div>
                                                <div className="text-right">£{financeResults?.totalAmountPayable || 'N/A'}</div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="text-left">Optional Final Payment:</div>
                                                <div className="text-right">£{financeResults?.optionalFinalPayment || 'N/A'}</div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="text-left">Total Interest Payable:</div>
                                                <div className="text-right">£{financeResults?.totalInterestPayable || 'N/A'}</div>
                                            </div>
                                        </div>
                                        <button onClick={togglePcpCalculatorPopup}>Close</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="finance-options-row flex items-center justify-center mt-8 mb-4">
                <div className="info-container ml-4 order-1 md:order-1">
                    <p className="text-left text-xl description-text">Thinking of treating yourself to a new car?</p>
                    <p className="text-left text-3xl description-text">Discover great finance offers today.</p>
                    <div className='flex space-x-4 finance-button'>
                        <button className="submit-button hover:bg-gray-800 hover:text-white text-left block" onClick={toggleHpCalculatorPopup}>HP Calculator</button>
                        {hpCalculatorPopupVisible && (
                            <div>
                                <div className="popup">
                                    <div className="finance-calculator">
                                        <h2 className='text-2xl p-4'>Finance Calculator</h2>
                                        <div className="table-container flex flex-col items-center">
                                            <div className="table-row flex-1 mx-2">
                                                <div className="table-cell">
                                                    <select
                                                        onChange={(e) => handleCarSelect(JSON.parse(e.target.value))}
                                                        className="border rounded p-2 w-full finance-options-button"
                                                    >
                                                        <option value="">Select a car</option>
                                                        {carData.map((car, index) => (
                                                            <option key={index} value={JSON.stringify(car)}>
                                                                {car.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="table-row flex-1 mx-2">
                                                <div className="table-cell">
                                                    <select
                                                        onChange={(e) => handleFinanceTermChange(parseInt(e.target.value))}
                                                        className="border rounded m-2 p-2 w-full finance-options-button"
                                                    >
                                                        <option value={12}>12 months</option>
                                                        <option value={24}>24 months</option>
                                                        <option value={36}>36 months</option>
                                                        <option value={48}>48 months</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="table-row flex-1 mx-2">
                                                <div className="table-cell">
                                                    <select
                                                        onChange={(e) => handleDepositChange(parseInt(e.target.value))}
                                                        className="border rounded m-2 p-2 w-full finance-options-button"
                                                    >
                                                        {[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000].map((amount, index) => (
                                                            <option key={index} value={amount}>
                                                                £{amount}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="table-row flex-1 mx-2">
                                                <div className="table-cell">
                                                    <button onClick={hpCalculateFinance} className="border rounded p-2 w-full finance-options-button">Calculate</button>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className='text-2xl p-4'>Finance Calculator Results</h2>
                                        <div className="table-container flex flex-col">
                                            <div className="flex justify-between">
                                                <div className="text-left">Car Price:</div>
                                                <div className="text-right">£{selectedCar?.cost || 'N/A'}</div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="text-left">Monthly Payment:</div>
                                                <div className="text-right">£{financeResults?.monthlyPayment || 'N/A'}</div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="text-left">Total Amount Payable:</div>
                                                <div className="text-right">£{financeResults?.totalAmountPayable || 'N/A'}</div>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="text-left">Total Interest Payable:</div>
                                                <div className="text-right">£{financeResults?.totalInterestPayable || 'N/A'}</div>
                                            </div>
                                        </div>
                                        <button onClick={toggleHpCalculatorPopup}>Close</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="image-container order-2 md:order-2">
                    <img src="./financeImages/finance-image-two.jpg" alt="Finance Option" />
                </div>
            </div>
        </div>
    );
}

export default FinanceOptions;