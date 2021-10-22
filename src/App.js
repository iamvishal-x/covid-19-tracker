import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import "./App.css";
import { sortData } from "./util";
import InfoBox from "./components/InfoBox";
import Map from "./components/Map";
import Table from "./components/Table";
import LineGraph from "./components/LineGraph";
import "leaflet/dist/leaflet.css";
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso3,
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);
  const onCountryChange = async (e) => {
    const countrycode = e.target.value;
    // console.log("yoo", countrycode);
    const url =
      countrycode === "Worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countrycode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countrycode);
        //all of the data from country response
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };
  console.log(countryInfo);
  return (
    <div className="app">
      <div className="app__left">
        {/* header */}
        <div className="app__header">
          {/* title + Select drop down */}
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__drowdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="Worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* title + Select drop down */}
        </div>
        {/* header */}
        {/* --------------------------------------------------- */}
        {/* info box */}
        <div className="app__stats">
          <InfoBox
            title="Coronavirus Cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <InfoBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
        {/* info box */}
        {/* --------------------------------------------------- */}

        {/* map */}
        <Map center={mapCenter} zoom={mapZoom} />
        {/* map */}
      </div>
      {/* --------------------------------------------------- */}
      <Card className="app__right">
        {/* table */}
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} />
          {/* table */}
          {/* graph */}
          <h3>Worldwide New Cases</h3>
          <LineGraph />
          {/* graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
