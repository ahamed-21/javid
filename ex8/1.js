import React, { useState } from "react";
//import './App.css'
const data = [
  { id: 1, name: "Abdevilliers" },
  { id: 2, name: "Javid" },
  { id: 3, name: "Virat Kohli" },
  { id: 4, name: "Arjun" },
  { id: 5, name: "Jogging" },
  { id: 6, name: "Virudhunagar" }
];

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div class="input">
      <input
        type="text"
        placeholder="Enter the intput"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default SearchFilter;