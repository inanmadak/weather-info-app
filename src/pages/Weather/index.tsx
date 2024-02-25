import { useCallback, useMemo, useState } from 'react';
import { debounce } from 'lodash-es';

import { PageTitle } from 'components/PageTitle/Component';
import { useWeatherApi } from './hooks';
import { CurrentWeather } from './components/CurrentWeather';
import { Loading } from 'components/Loading';
import { DailyForecast } from './components/DailyForecast';
import { ForecastDay } from 'common/types';
import { TextField } from 'components/TextField/Component';
import { ErrorMessage } from 'components/ErrorMessage';
import styles from './styles.module.scss';
import { List } from 'components/List/Component';
import { ListItem } from 'components/List/ListItem';

export const Weather = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState('');
  const { data, isLoading, isError } = useWeatherApi({ days: 3, q: search || 'Berlin' });

  const onSearchChange = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      }, 1000),
    []
  );

  const onAddToFavorites = useCallback(() => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      newSet.add(data?.location?.name as string);
      return newSet;
    });
  }, [data?.location?.name]);

  const onRemoveFromFavorites = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    const city = e.currentTarget.dataset.id as string;

    setFavorites((prev) => {
      const newSet = new Set(prev);
      newSet.delete(city);
      return newSet;
    });
  }, []);

  const onSelectFavorite = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    setSearch(e.currentTarget.dataset.id as string);
  }, []);

  return (
    <div className={styles.weatherContainer}>
      <PageTitle title='Weather Forecasts' />
      <div className={styles.content}>
        <div className={styles.weatherInfo}>
          <div className={styles.search}>
            <div>
              <TextField placeholder='Search city' onChange={onSearchChange} defaultValue='Berlin' />
              <small>Default city is Berlin</small>
            </div>
            <div>
              <button onClick={onAddToFavorites} disabled={isLoading || !!data?.error?.message}>
                Add to favorites
              </button>
            </div>
          </div>
          <div>
            {isLoading ? (
              <Loading />
            ) : isError ? (
              <ErrorMessage message='Something went wrong while getting the data' />
            ) : data?.error?.message ? (
              <ErrorMessage message={data.error.message} />
            ) : data ? (
              <>
                <CurrentWeather city={data.location.name} weather={data.current} />
                <div className={styles.forecastWrapper}>
                  {data.forecast.forecastday.map((forecastDay: ForecastDay) => (
                    <DailyForecast key={forecastDay.date} forecastDay={forecastDay} />
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div className={styles.favorites}>
          <List title='Favorites' emptyMessage={favorites.size === 0 ? 'No favorites added.' : ''}>
            {Array.from(favorites.values()).map((city) => (
              <ListItem key={city} id={city} onClick={onSelectFavorite} onRemove={onRemoveFromFavorites}>
                {city}
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};
