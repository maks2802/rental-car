import { useState } from "react";

const Filter = ({ onChange }) => {
  const [brand, setBrand] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const filters = {};
    if (brand) filters.brand = brand;
    if (rentalPrice) filters.rentalPrice = rentalPrice;
    if (minMileage) filters.minMileage = minMileage;
    if (maxMileage) filters.maxMileage = maxMileage;

    onChange(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option value="">Choose a brand</option>
        <option value="Aston Martin">Aston Martin</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Bentley">Bentley</option>
        <option value="Buick">Buick</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Chrysler">Chrysler</option>
        <option value="GMC">GMC</option>
        <option value="HUMMER">HUMMER</option>
        <option value="Hyundai">Hyundai</option>
        <option value="Kia">Kia</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Land Rover">Land Rover</option>
        <option value="Lincoln">Lincoln</option>
        <option value="MINI">MINI</option>
        <option value="Mercedes-Benz">Mercedes-Benz</option>
        <option value="Mitsubishi">Mitsubishi</option>
        <option value="Nissan">Nissan</option>
        <option value="Pontiac">Pontiac</option>
        <option value="Subaru">Subaru</option>
        <option value="Volvo">Volvo</option>
      </select>

      <select
        value={rentalPrice}
        onChange={(e) => setRentalPrice(e.target.value)}
      >
        <option value="">Choose a price</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
        <option value="90">90</option>
        <option value="100">100</option>
        <option value="110">110</option>
        <option value="120">120</option>
        <option value="130">130</option>
        <option value="140">140</option>
        <option value="150">150</option>
      </select>

      <input
        type="number"
        placeholder="From km"
        value={minMileage}
        onChange={(e) => setMinMileage(e.target.value)}
      />
      <input
        type="number"
        placeholder="To km"
        value={maxMileage}
        onChange={(e) => setMaxMileage(e.target.value)}
      />

      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default Filter;
