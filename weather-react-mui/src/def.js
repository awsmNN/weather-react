const SERVER = {
  URL: 'http://api.openweathermap.org/data/2.5/weather',
  FORECAST_URL: 'http://api.openweathermap.org/data/2.5/forecast',
  IMG_URL: 'http://openweathermap.org/img/wn/',
  API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
};

const defaultCity = 'Moscow';

const defaultForecastWeather = {
  city: '',
  list: [],
};

const defaultWeather = {
  city: '',
  temp: '',
  weather: '',
  feels: '',
  icon: '',
  sunrise: '',
  sunset: '',
};


export {
  SERVER, defaultCity, defaultForecastWeather, defaultWeather,
};
