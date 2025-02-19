import React, { useState } from 'react';
import './miller.css';

// Main component for the Miller interface
const MillerPage = () => {
  // State management
  const [selectedItems, setSelectedItems] = useState([]); // Tracks checked items
  const [items, setItems] = useState([                 // All available items with prices
    { name: 'Samba', price: 0 },
    { name: 'Kirisamba', price: 0 },
    { name: 'Nadu', price: 0 },
    { name: 'Ponnisamba', price: 0 },
    { name: 'Basmathi', price: 0 },
    { name: 'Rathu rice', price: 0 },
  
  ]);
  const [isEditing, setIsEditing] = useState(false);   // Toggle edit/save mode

  // Handles checkbox selection changes
  const handleCheckboxChange = (itemName) => {
    setSelectedItems(prev => 
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)  // Remove if already selected
        : [...prev, itemName]                    // Add if not selected
    );
  };

  // Updates price for specific item
  const handlePriceChange = (itemName, newPrice) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.name === itemName 
          ? { ...item, price: Number(newPrice) }  // Update price
          : item                                  // Keep other items unchanged
      )
    );
  };

  return (
    <div className="miller-container">
      {/* Header Section */}
      <h1 className="miller-title">ABC Mill</h1>
      <p className="welcome-message">Welcome, miller! Explore resources and tools made for you.</p>

      {/* Checkbox Selection Grid */}
      <div className="checkbox-group">
        {items.map(item => (
          <label key={item.name} className="checkbox-label">
            {/* Hidden checkbox input */}
            <input
              type="checkbox"
              checked={selectedItems.includes(item.name)}
              onChange={() => handleCheckboxChange(item.name)}
            />
            {/* Custom checkbox visual */}
            <span className="checkmark"></span>
            {/* Item name display */}
            {item.name}
          </label>
        ))}
      </div>

      {/* Price Display/Edit Table */}
      <div className="table-container">
        <table className="price-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items
              .filter(item => selectedItems.includes(item.name))  // Only show selected items
              .map(item => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>
                    {isEditing ? (
                      // Editable input field in edit mode
                      <input
                        type="number"
                        value={item.price}
                        onChange={(e) => handlePriceChange(item.name, e.target.value)}
                        className="price-input"
                        min="0"
                      />
                    ) : (
                      // Display formatted price in view mode
                      `${item.price.toFixed(2)} LKR`
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Edit/Save Button Section */}
      <div className="button-group">
        <button
          className={`edit-btn ${isEditing ? 'save' : ''}`}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Save Changes' : 'Edit Prices'}
        </button>
      </div>
    </div>
  );
};

export default MillerPage;