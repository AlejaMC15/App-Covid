import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "../components/home";
import moment from "moment";

const CovidApi = () => {
  const [title, setTitle] = useState("Global");
  const [date, setDate] = useState("");
  const [stats, setStats] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getDataCovidApi();
  }, []);

  const getDataCovidApi = async () => {
    const response = await axios.get("https://api.covid19api.com/summary");
    setTitle("Global");
    setDate(moment(response.data?.Date).format("MMMM Do YYYY, h:mm:ss a"));
    setStats(response.data?.Global);
    setCountries(response.data?.Countries);
  };

  return (
    <div>
      <Home
        title={title}
        setTitle={setTitle}
        date={date}
        stats={stats}
        setStats={setStats}
        countries={countries}
      />
    </div>
  );
};

export default CovidApi;
