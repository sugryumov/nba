import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { TEAM_FULL_NAMES } from '@/constants/teams';

import './index.css';
import SVGIcon from '@/components/SVGIcon';

const PlayByPlayHeader: FC = () => {
  const { search } = useLocation();

  const hTeam = new URLSearchParams(search).get('hTeam')!;
  const vTeam = new URLSearchParams(search).get('vTeam')!;

  return (
    <div className="play-by-play__header">
      <div className="play-by-play__header--team">
        <SVGIcon name={vTeam} width={40} height={40} />
        {TEAM_FULL_NAMES[vTeam]}
      </div>
      <div className="play-by-play__header--team">
        <SVGIcon name={hTeam} width={40} height={40} />
        {TEAM_FULL_NAMES[hTeam]}
      </div>
    </div>
  );
};

export default PlayByPlayHeader;
