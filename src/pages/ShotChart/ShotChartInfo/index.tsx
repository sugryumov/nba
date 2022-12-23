import { FC } from 'react';
import ShotChartVideo from './ShotChartVideo';
import ShotChartMap from './ShotChartMap';

import './index.css';

const ShotChartInfo: FC = () => (
  <div className="short-chat__info">
    <ShotChartVideo />
    <ShotChartMap />
  </div>
);

export default ShotChartInfo;
