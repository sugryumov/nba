import { StandingsResponseDto } from '@/types/response/standings';

type SeparateOnDivisionResult = {
  east: StandingsResponseDto[];
  west: StandingsResponseDto[];
};

export const separateOnDivision = (data: StandingsResponseDto[] = []) =>
  data?.reduce(
    (acc, team) => {
      if (team.conference === 'East') {
        return {
          ...acc,
          east: [...acc.east, team],
        };
      }

      return {
        ...acc,
        west: [...acc.west, team],
      };
    },
    { east: [], west: [] } as SeparateOnDivisionResult,
  );
