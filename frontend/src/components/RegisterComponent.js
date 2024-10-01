import React, { useState } from 'react';
import axios from 'axios';

const RegisterComponent = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isRepair, setIsRepair] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, price, is_repair: isRepair };
    try {
        const response = await axios.post('http://localhost:8000/api/components/', data);

      console.log(response.data);
      alert('Component added successfully!');
    } catch (err) {
      console.error(err);
      alert('Error adding component!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Component Name"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <label>
        Repair:
        <input
          type="checkbox"
          checked={isRepair}
          onChange={(e) => setIsRepair(e.target.checked)}
        />
      </label>
      <button type="submit">Add Component</button>
    </form>
  );
};

export default RegisterComponent;
