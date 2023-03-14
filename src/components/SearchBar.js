// import React from "react";

// function SearchBar() {
//   return (
//     <form className="form-inline">
//       <input
//         className="form-control mr-sm-2"
//         type="search"
//         placeholder="Search"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           width: "80%",
//           margin: "auto",
//           marginBottom: "20px",
//           marginTop: "20px",
//         }}
//       />
//       <button type="button" className="btn btn-primary">
//         Search
//       </button>
//     </form>
//   );
// }

// export default SearchBar;
import React, { useState } from "react";
import axios from "axios";

export const SearchBar = () => {
  const [country, setCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  //   console.log(searchQuery)
  const handlesearch = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${searchQuery}`
    );
    console.log(response.data[0]);
    setCountry(response.data[0]);
    setLoading(false);
  };

  return (
    <div className="search-container">
      <div className="input-button-container">
        {/* <input
          type="text"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}
            <input className="form-control mr-sm-2" type="text" placeholder="Search for a country..." aria-label="Search" value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} style={{
              display: "flex",
              width: "20%",
              margin: "auto",
              marginBottom: "20px",
              marginTop: "20px",

            }}/>
            {/* <input
          type="text"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}


        <button className="btn btn-outline-success my-2 my-sm-0" onClick={handlesearch} type="submit">Search</button>

      </div>
      {country && !loading && (
        <div
          className="card"
          style={{
            width: "0%",
            alignItems: "center",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          {/* <img
            src={country.flags.png}
            className="card-img-top"
            alt="..."
            style={{
              width: "20%",
              height: "20%",
              alignItems: "center",
            }}
          /> */}

          <div
            class="card"
            style={{
              width: "18rem",
            }}
          >
            <div className="card-body">
              <img
                src={country.flags.png}
                className="card-img-top"
                alt="..."
                style={{
                  width: "40%",
                  height: "20%",
                  alignItems: "center",
                }}
              />

              <h5 class="card-title">Name:{country.name.common}</h5>
              <p className="card-text">Capital:{country.capital[0]}</p>
              <p class="card-text">Region:{country.region}</p>

              {/* <a href="#" class="btn btn-primary">
                OK
              </a> */}
            </div>
          </div>
        </div>
      )}

      {/* <h2 className="loading">loading...</h2> */}
    </div>
  );
};

export default SearchBar;
