import { FC, Fragment } from 'react';
import { PlayByPlayResponseDto } from '@/types/response/playByPlay';

import './index.css';

type PlayByPlayItemProps = {
  item: PlayByPlayResponseDto;
};

const PlayByPlayItem: FC<PlayByPlayItemProps> = ({ item }) => {
  if (item.eventMsgType === 12) {
    return <p className="play-by-play__item--quarter">Q{item.period} start</p>;
  }

  if (item.eventMsgType === 13) {
    return <p className="play-by-play__item--quarter">Q{item.period} end</p>;
  }

  const showPhoto = item.player1Name || item.player3Name || item.player3Name;

  return (
    <Fragment key={item.eventNum}>
      {item.visitorDescription && (
        <div className="play-by-play__item play-by-play__item--left">
          <div className="play-by-play__item--description">
            <span className="play-by-play__item--text">
              {item.visitorDescription}
            </span>
            {showPhoto && (
              <img
                className="play-by-play__item--img"
                src={`https://cdn.nba.com/headshots/nba/latest/260x190/${
                  item.person1Type === 4 ? item.player3Id : item.player1Id
                }.png`}
              />
            )}
          </div>
          <div className="play-by-play__item--time">
            <p>{item.pcTimeString}</p>
            <p className="play-by-play__item--score">
              {item.score && item.score}
            </p>
          </div>
        </div>
      )}

      {item.homeDescription && (
        <div className="play-by-play__item play-by-play__item--right">
          <div className="play-by-play__item--time">
            <p>{item.pcTimeString}</p>
            <p className="play-by-play__item--score">
              {item.score && item.score}
            </p>
          </div>
          <div className="play-by-play__item--description">
            {showPhoto && (
              <img
                className="play-by-play__item--img"
                src={`https://cdn.nba.com/headshots/nba/latest/260x190/${
                  item.person3Type === 4 ? item.player3Id : item.player1Id
                }.png`}
              />
            )}

            <span className="play-by-play__item--text">
              {item.homeDescription}
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PlayByPlayItem;
