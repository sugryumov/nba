import { FC, Fragment } from 'react';
import { PlayByPlayResponseDto } from '@/types/response/playByPlay';
import { PLAY_BY_PLAY_EVENT_MSG_TYPE } from '@/constants/gameStatus';

import './index.css';

type PlayByPlayItemProps = {
  item: PlayByPlayResponseDto;
};

const PlayByPlayItem: FC<PlayByPlayItemProps> = ({ item }) => {
  const {
    eventMsgType,
    period,
    person1Type,
    player1Name,
    player1Id,
    player2Name,
    player3Name,
    player3Id,
    person3Type,
    visitorDescription,
    homeDescription,
    pcTimeString,
    score,
  } = item;

  if (eventMsgType === PLAY_BY_PLAY_EVENT_MSG_TYPE.startQuarter) {
    return <p className="play-by-play__item--quarter">Q{period} start</p>;
  }

  if (eventMsgType === PLAY_BY_PLAY_EVENT_MSG_TYPE.endQuarter) {
    return <p className="play-by-play__item--quarter">Q{period} end</p>;
  }

  const showPhoto = player1Name || player2Name || player3Name;
  const playerId = (type: number) => (type === 4 ? player3Id : player1Id);

  const renderItem = (description: string | null, isHome: boolean) => {
    const classNameItem = isHome
      ? 'play-by-play__item--home'
      : 'play-by-play__item--visitor';

    const classNameDescription = isHome
      ? 'play-by-play__item--description'
      : 'play-by-play__item--description play-by-play__item--reverse';

    const srcPath = `https://cdn.nba.com/headshots/nba/latest/260x190/${
      isHome ? playerId(person3Type) : playerId(person1Type)
    }.png`;

    return (
      <>
        {description && (
          <div className={`play-by-play__item ${classNameItem}`}>
            <div className="play-by-play__item--info">
              <p>{pcTimeString}</p>
              <p className="play-by-play__item--score">{score && score}</p>
            </div>
            <div className={classNameDescription}>
              {showPhoto && (
                <img className="play-by-play__item--img" src={srcPath} />
              )}
              <span className="play-by-play__item--text">{description}</span>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <Fragment key={item.eventNum}>
      {renderItem(visitorDescription, false)}
      {renderItem(homeDescription, true)}
    </Fragment>
  );
};

export default PlayByPlayItem;
