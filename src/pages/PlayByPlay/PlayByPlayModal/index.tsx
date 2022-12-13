import { FC, useState } from 'react';
import { Button, Modal, Spin } from 'antd';
import { useLazyFetchVideoEventQuery } from '@/services/videoEventService';

import './index.css';

type PlayByPlayModalProps = {
  gameId: string;
  eventNum: number;
  description: string;
  videoAvailableFlag: boolean;
};

const PlayByPlayModal: FC<PlayByPlayModalProps> = ({
  gameId,
  eventNum,
  description,
  videoAvailableFlag,
}) => {
  const [fetchVideo, { data, isFetching }] = useLazyFetchVideoEventQuery();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);

    fetchVideo({
      gameId,
      gameEventId: eventNum,
    });
  };

  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      {videoAvailableFlag ? (
        <Button
          type="link"
          onClick={showModal}
          className="play-by-play__modal--button"
        >
          {description}
        </Button>
      ) : (
        <p className="play-by-play__modal--text">{description}</p>
      )}

      <Modal
        title={description}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        width={1000}
        destroyOnClose
        className="play-by-play__modal"
      >
        {isFetching ? (
          <Spin size="large" className="play-by-play__modal--spin" />
        ) : (
          <video
            autoPlay
            controls
            src={data?.videoUrl}
            poster={data?.videoPoster}
            className="play-by-play__modal--video"
          />
        )}
      </Modal>
    </>
  );
};

export default PlayByPlayModal;
