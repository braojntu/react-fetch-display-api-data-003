import {useState, useEffect} from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [countryData, setCountryData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
    );
    setCountryData(response.data.slice(0, 400));
  };

  useEffect(() => {
    fetchData();
    console.log(countryData);
  }, []);

  return (
    <>
      <div className="App">
        <h1>Country Info</h1>
        <h2>(Fetch API data and display using React - Project 3)</h2>

        {/* Fetch data from API */}
        <div>
          <button className="fetch-button" onClick={fetchData}>
            Fetch Data
          </button>
          <br />
        </div>
        {/* Display data from API */}

        <table className="table-container">
          <tbody>
            <tr>
              <th>Country Name</th>
              <th>ISO Code</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Sub Region</th>
              <th>Currency Code</th>
              <th>Currency Name</th>
              <th>Phone Code</th>
              {/* <th>States</th>
              <th>Cities</th> */}
            </tr>
            {countryData &&
              countryData.map((countryData, index) => (
                <tr key={index}>
                  <td>{countryData.name}</td>
                  <td>{countryData.iso2}</td>
                  <td>{countryData.capital}</td>
                  <td>{countryData.region}</td>
                  <td>{countryData.subregion}</td>
                  <td>{countryData.currency}</td>
                  <td>{countryData.currency_name}</td>
                  <td>{countryData.phone_code}</td>
                  {/* <td></td>
                  <td></td>
                  <td>{countryData.states.join(",")}</td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
