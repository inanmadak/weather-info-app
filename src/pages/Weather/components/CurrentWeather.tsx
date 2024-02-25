import { CurrentWeatherInfo } from 'common/types';
import { FC } from 'react';
import { convertDate } from 'utils/misc';

import styles from './styles.module.scss';
import { InfoField } from 'components/InfoField/Component';

export interface CurrentWeatherProps {
  city: string;
  weather: CurrentWeatherInfo;
}

export const CurrentWeather: FC<CurrentWeatherProps> = ({ city, weather: { last_updated, condition, temp_c, wind_degree, wind_kph } }) => {
  return (
    <div className={styles.currentWeather}>
      <h3>Current Weather for {city}</h3>
      <div className={styles.infoWrapper}>
        <InfoField label='Last updated' value={convertDate(last_updated)} />
      </div>
      <div className={styles.infoWrapper}>
        <InfoField label='Temperature' value={`${temp_c} °C`} />
      </div>
      <div className={styles.infoWrapper}>
        <InfoField label='Condition' value={condition.text} />
        <img src={`http:${condition.icon}`} alt={condition.text} />
      </div>
      <div className={styles.infoWrapper}>
        <InfoField label='Wind' value={`${wind_degree}° ${wind_kph} km/h`} />
      </div>
    </div>
  );
};
