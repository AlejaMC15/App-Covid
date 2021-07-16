import React, { useState } from "react";

function Home(props) {
  const [selectCountry, setSelectCountry] = useState(0);

  const onChange = (e) => {
    setSelectCountry(e.target.value);
    const country = props.countries?.find((item) => item.ID === e.target.value);
    props.setStats(country);
    props.setTitle(country.Country);
  };

  return (
    <div className="Home">
      <div className="container">
        <div className="text-center">
          <h1 className="mt-4">{props.title}</h1>
          <h6 className="my-4">{props.date}</h6>
        </div>
        <div className="row my-4 g-4">
          <div className="col-md-6">
            <div
              className="card text-center p-5"
              style={{ backgroundColor: "#ADF7E5" }}
            >
              <h5>Casos</h5>
              <div className="mb-4fs-4">
                <span className="fw-bold">New: </span>
                {props.stats.NewConfirmed}
              </div>
              <div className="mb-4fs-4">
                <span className="fw-bold">Total: </span>
                {props.stats.TotalConfirmed}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card text-center p-5"
              style={{ backgroundColor: "#EAADF7" }}
            >
              <h5>Muertes</h5>
              <div className="mb-4fs-4">
                <span className="fw-bold">New: </span>
                {props.stats.NewDeaths}
              </div>
              <div className="mb-4fs-4">
                <span className="fw-bold">Total: </span>
                {props.stats.TotalDeaths}
              </div>
            </div>
          </div>
        </div>

        <select
          className="my-3 col-12 py-1 border"
          value={selectCountry}
          onChange={(e) => onChange(e)}
        >
          <option value="0">País seleccionado</option>
          {props.countries.map((item) => (
            <option key={item.ID} value={item.ID}>
              {item.Country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Home;
