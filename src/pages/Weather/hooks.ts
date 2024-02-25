import { API_KEY, API_URL } from 'config/api';
import { useQuery } from 'react-query';
import { makeUrl } from 'utils/misc';

type WeatherApiParams = {
  days: number;
  q: string;
};

const getWeatherInfo = async (params: WeatherApiParams) => {
  try {
    const url = makeUrl(`${API_URL}`, { ...params, key: API_KEY });

    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error('Error fetching weather info', error);
  }
};

export const useWeatherApi = (params: WeatherApiParams) => {
  return useQuery(['location', params], () => getWeatherInfo(params), { notifyOnChangeProps: ['data'], staleTime: 10 });
};
