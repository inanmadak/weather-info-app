import { ForecastDay } from 'common/types';
import { convertDate } from 'utils/misc';

import styles from './styles.module.scss';
import { InfoField } from 'components/InfoField/Component';

export interface DailyForecastProps {
  forecastDay: ForecastDay;
}

export const DailyForecast = ({
  forecastDay: {
    date,
    day: { avgtemp_c, maxtemp_c, mintemp_c, condition, maxwind_kph },
  },
}: DailyForecastProps) => {
  return (
    <div className={styles.dailyForecast}>
      <h3 className={styles.currentDate}>{convertDate(date)}</h3>
      <div className={styles.infoWrapperCondition}>
        <InfoField label='Condition' value={condition.text} vertical />
        <img src={`http:${condition.icon}`} alt={condition.text} />
      </div>
      <div className={styles.values}>
        <div className={styles.infoWrapper}>
          <InfoField label='Temperature' value={`${avgtemp_c} °C`} vertical />
        </div>
        <div className={styles.infoWrapper}>
          <InfoField label='Max' value={`${maxtemp_c} °C`} vertical />
        </div>
        <div className={styles.infoWrapper}>
          <InfoField label='Min' value={`${mintemp_c} °C`} vertical />
        </div>
        <div className={styles.infoWrapper}>
          <InfoField label='Wind' value={`${maxwind_kph} km/h`} vertical />
        </div>
      </div>
    </div>
  );
};
