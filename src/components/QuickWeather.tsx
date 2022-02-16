import { useEffect, useState } from "react";
import { REACT_APP_API_KEY } from "../Globals";
import Form from "./Form";

const QuickWeather = () => {
	const [weather, setWeather] = useState<any>(null);
	useEffect(() => {}, [weather]);

	const childToParent = (city: string) => {
		getWeather(city).then(setWeather);
		return null;
	};

	return !weather ? (
		<>
			<Form childToParent={childToParent}></Form>
			<p style={{ textAlign: "center", color: "gray" }}>
				{" "}
				Waiting for data ...
			</p>
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
			<Form childToParent={childToParent}></Form>
			<div className='quick-weather'>
				{/* <img src={logo} alt="logo" /> */}
				<p>Temprature 🌡️ {(weather.main.feels_like - 273).toFixed(1)}° C</p>
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
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}`
	);
	const data = await Weather.json();
	return data;
};
export default QuickWeather;
