import { useEffect, useState } from "react";
import Form from "./Form";

const QuickWeather = () => {
	const [weather, setWeather] = useState<any>(null);
  const [city, setCity] = useState("");
	useEffect(() => {
		getWeather(city).then(setWeather);
	}, [city, weather]);

	return !weather ? (
    <>
    <Form setCity={setCity}></Form>
		<p>Loading...</p>
    </>
	) : (
		<>
			<style>
				{`
      .quick-weather {
        display: flex;
        flex-direction: column;
        flex-grow : 0.5;
        justify-content : center;
        background-color: #ffffff;
        padding: 20px;
        text-align: center;
      }
    `}
			</style>
      <Form setCity={setCity}></Form>
			<div className='quick-weather'>
				{/* <img src={logo} alt="logo" /> */}
				<h3>Temprature 🌡️ {(weather.main.feels_like - 273).toFixed(1)}° C</h3>
				<p>Wind 🎐 {weather.wind.speed}</p>
				<p>Humidity 🎏 {weather.main.humidity}</p>
				<p>
					Location 📍 {weather.name}, {weather.sys.country}
				</p>
			</div>
		</>
	);
};

const getWeather = async (city: string) => {
	const Weather = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc104db50e560b1ba4852e7fd7a92a9b`
	);
	const data = await Weather.json();
	return data;
};
export default QuickWeather;
