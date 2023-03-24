import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import { SearchForm } from './components/search/SearchForm';
import { CityList } from './components/сityList/CityList';
import { Now } from './components/now/Now';
import { Details } from './components/details/Details';
import { Forecast } from './components/forecast/Forecast';
import { TabButtons } from './components/tabButtons/TabButtons';
import { defaultForecastWeather, defaultWeather } from './def';
import { getForecastWeather, getWeather } from './server';
import { getCityList, getCurrentCity, saveCurrentCity } from './storage';

function App() {
  const [city, setCity] = useState(getCurrentCity());
  const [weather, setWeather] = useState(defaultWeather);
  const [forecastWeather, setForecastWeather] = useState(defaultForecastWeather);
  const [cityList, setCityList] = useState(getCityList());
  const [tab, setTab] = useState('Now');
  const [tabBlock, setTabBlock] = useState();

  useEffect(() => {
    saveCurrentCity(city);
    getWeather(city).then((result) => {
      setWeather(result);
    });
    getForecastWeather(city).then(((result) => {
      setForecastWeather(result);
    }));
  }, [city]);

  useEffect(() => {
    switch (tab) {
      case 'Now':
        setTabBlock(<Now weather={weather} cityList={cityList} setCityList={setCityList} />);
        break;
      case 'Details':
        setTabBlock(<Details weather={weather} />);
        break;
      case 'Forecast':
        setTabBlock(<Forecast weather={forecastWeather} />);
        break;
      default:
        break;
    }
  }, [tab, weather, forecastWeather]);

  return (
    <>
    <Header> </Header>
    <div className="weather">
      <SearchForm setCity={setCity} city={city} />
      <div className="weather__bottom">
        <div className="weather__block">
          {tabBlock}
          <TabButtons setTab={setTab} weather={weather} />
        </div>
        <div className="weather__block">
          <CityList setCity={setCity} cityList={cityList} setCityList={setCityList} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
