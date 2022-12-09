import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { TEAM_FULL_NAMES } from '@/constants/teams';
import SVGIcon from '@/components/SVGIcon';

import './index.css';

const PlayByPlayHeader: FC = () => {
  const { search } = useLocation();

  const hTeam = new URLSearchParams(search).get('hTeam')!;
  const vTeam = new URLSearchParams(search).get('vTeam')!;

  const renderTeam = (team: string) => (
    <div className="play-by-play__header--team">
      <SVGIcon name={team} width={40} height={40} />
      {TEAM_FULL_NAMES[team]}
    </div>
  );

  return (
    <div className="play-by-play__header">
      {renderTeam(hTeam)}
      {renderTeam(vTeam)}
    </div>
  );
};

export default PlayByPlayHeader;
