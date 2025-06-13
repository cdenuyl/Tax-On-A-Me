import React, { useState } from "react";

const PeopleTab = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    filingStatus: "single",
    address: "",
    ownsHome: true,
    propertyTaxValue: "",
    propertyTaxPaid: "",
    resident6Months: false,
    medicare: "none",
    institution: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setPerson((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Client Info</h3>
      <input name="firstName" placeholder="First Name" className="input" value={person.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" className="input" value={person.lastName} onChange={handleChange} />
      <input name="dob" type="date" className="input" value={person.dob} onChange={handleChange} />
      <select name="filingStatus" className="input" value={person.filingStatus} onChange={handleChange}>
        <option value="single">Single</option>
        <option value="married">Married Filing Jointly</option>
        <option value="head">Head of Household</option>
      </select>
      <input name="address" placeholder="Address" className="input" value={person.address} onChange={handleChange} />
      <label className="block">
        <input type="checkbox" name="ownsHome" checked={person.ownsHome} onChange={handleChange} />
        <span className="ml-2">Owns Home</span>
      </label>
      <input name="propertyTaxValue" placeholder="Property Tax Value" className="input" value={person.propertyTaxValue} onChange={handleChange} />
      <input name="propertyTaxPaid" placeholder="Property Taxes Paid" className="input" value={person.propertyTaxPaid} onChange={handleChange} />
      <label className="block">
        <input type="checkbox" name="resident6Months" checked={person.resident6Months} onChange={handleChange} />
        <span className="ml-2">Lived in Michigan 6+ months</span>
      </label>
      <select name="medicare" className="input" value={person.medicare} onChange={handleChange}>
        <option value="none">No Medicare</option>
        <option value="partA">Part A</option>
        <option value="partB">Part B</option>
        <option value="both">Part A & B</option>
        <option value="advantage">Medicare Advantage</option>
      </select>
      <input name="institution" placeholder="Institution" className="input" value={person.institution} onChange={handleChange} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Client</button>
    </div>
  );
};

export default PeopleTab;
