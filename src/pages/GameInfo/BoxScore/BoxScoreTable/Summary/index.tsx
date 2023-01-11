import { FC } from 'react';
import { Table } from 'antd';
import { BoxScoreStatistics } from '@/types/response/boxScore';

import './index.css';

type SummaryProps = {
  statistics: BoxScoreStatistics;
};

const Summary: FC<SummaryProps> = ({ statistics }) => {
  const {
    fieldGoalsMade,
    fieldGoalsAttempted,
    fieldGoalsPercentage,
    threePointersMade,
    threePointersAttempted,
    threePointersPercentage,
    freeThrowsMade,
    freeThrowsAttempted,
    freeThrowsPercentage,
    reboundsOffensive,
    reboundsDefensive,
    reboundsPersonal,
    assists,
    steals,
    blocks,
    turnovers,
    foulsPersonal,
    points,
  } = statistics;

  const fieldGoalsPerToFix = (fieldGoalsPercentage * 100).toFixed(1);
  const threePointersPerToFix = (threePointersPercentage * 100).toFixed(1);
  const freeThrowsPerToFix = (freeThrowsPercentage * 100).toFixed(1);

  return (
    <Table.Summary fixed>
      <Table.Summary.Row className="box-score__table--summary">
        <Table.Summary.Cell index={0} className="box-score__table--totals">
          Totals
        </Table.Summary.Cell>
        <Table.Summary.Cell index={1}></Table.Summary.Cell>
        <Table.Summary.Cell index={2}>{fieldGoalsMade}</Table.Summary.Cell>
        <Table.Summary.Cell index={2}>{fieldGoalsAttempted}</Table.Summary.Cell>
        <Table.Summary.Cell index={3}>{fieldGoalsPerToFix}</Table.Summary.Cell>
        <Table.Summary.Cell index={4}>{threePointersMade}</Table.Summary.Cell>
        <Table.Summary.Cell index={5}>
          {threePointersAttempted}
        </Table.Summary.Cell>
        <Table.Summary.Cell index={6}>
          {threePointersPerToFix}
        </Table.Summary.Cell>
        <Table.Summary.Cell index={7}>{freeThrowsMade}</Table.Summary.Cell>
        <Table.Summary.Cell index={8}>{freeThrowsAttempted}</Table.Summary.Cell>
        <Table.Summary.Cell index={9}>{freeThrowsPerToFix}</Table.Summary.Cell>
        <Table.Summary.Cell index={10}>{reboundsOffensive}</Table.Summary.Cell>
        <Table.Summary.Cell index={11}>{reboundsDefensive}</Table.Summary.Cell>
        <Table.Summary.Cell index={12}>{reboundsPersonal}</Table.Summary.Cell>
        <Table.Summary.Cell index={13}>{assists}</Table.Summary.Cell>
        <Table.Summary.Cell index={14}>{steals}</Table.Summary.Cell>
        <Table.Summary.Cell index={15}>{blocks}</Table.Summary.Cell>
        <Table.Summary.Cell index={16}>{turnovers}</Table.Summary.Cell>
        <Table.Summary.Cell index={17}>{foulsPersonal}</Table.Summary.Cell>
        <Table.Summary.Cell index={18}>{points}</Table.Summary.Cell>
        <Table.Summary.Cell index={19}></Table.Summary.Cell>
      </Table.Summary.Row>
    </Table.Summary>
  );
};

export default Summary;
