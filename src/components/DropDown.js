import React, { useEffect, useState } from "react";
import axios from "axios";
function DropDown() {
  const [country, setCountry] = useState([]);
  const [region, setRegion] = useState("asia");
  useEffect(
    function () {
      axios
        .get(`https://restcountries.com/v3.1/region/${region}`)
        .then((response) => setCountry(response.data))
        .catch((error) => console.log(error));
    },
    [region]
  );

  return (
    <div>
      <select className="form-select" value={region} onChange={(e) => setRegion(e.target.value)} style={{
        display: "flex",
        justifyContent: "center",
        width: "80%",
        margin: "auto",
        marginBottom: "20px",
        marginTop: "20px",
  
      }}>
        <option value="asia">Asia</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <table
        // className="table table-striped table-bordered table-hover"
        className="table table-striped table-bordered table-hover"
        striped="true"
        bordered="true"
        hover="true"
        style={{
          justifyContent: "center",
          width: "80%",
          margin: "auto",
          marginTop: "30px",
          marginBottom: "60px",
        }}
      >
        <thead className="table-dark">
          <tr>
            <th>Code</th>
            <th>Country</th>
            <th>Capital</th>
            <th>Flag</th>
          </tr>
        </thead>
        {country.map((country) => (
          <tr>
            <td>{country.cca3}</td>
            <td>{country.name.common}</td>
            <td>{country.capital}</td>
            <td>
              <img
                style={{ width: "50px", height: "50px" }}
                src={country.flags.png}
                alt="flag"
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default DropDown;
