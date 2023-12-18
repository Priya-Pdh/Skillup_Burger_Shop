import React, { useState } from 'react';
import { Country, State } from 'country-state-city';
import Popup from 'reactjs-popup';

const Shipping = () => {
  // State variables to store selected country and state
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  // Function to handle country selection
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    // Reset the state when the country changes
    setSelectedState('');
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Select Country</option>
              {Country.getAllCountries().map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>State</label>
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">Select State</option>
              {selectedCountry &&
                State.getStatesOfCountry(selectedCountry).map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          {/* Add the code for contact */}
          <Popup trigger={<button type="button">Confirm Order</button>} position="right center">
            <div
              style={{
                color: 'red',
                position: 'absolute',
                top: '50%',
                right: '100%',
                transform: 'translateY(-50%)',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              Order Placed
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
