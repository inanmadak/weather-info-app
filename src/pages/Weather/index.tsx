import { PageTitle } from 'components/PageTitle/Component';
import { useWeatherApi } from './hooks';
import { CurrentWeather } from './components/CurrentWeather';
import { Loading } from 'components/Loading';
import { DailyForecast } from './components/DailyForecast';
import { ForecastDay } from 'common/types';
import styles from './styles.module.scss';

export const Weather = () => {
  const { data, isFetching } = useWeatherApi({ days: 5, q: 'London' });

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className={styles.weatherContainer}>
      <PageTitle title='Weather Forecasts' />

      <CurrentWeather weather={data?.current} city='London' />
      <div>{data?.forecast.forecastday.map((day: ForecastDay) => <DailyForecast key={day.date} forecastDay={day} />)}</div>
    </div>
  );
};
