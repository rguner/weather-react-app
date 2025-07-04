export interface WeatherData {
    temperature: number;
    conditions: string;
    city: string;
}

export interface CityWeather {
    cityName: string;
    weather: WeatherData;
}