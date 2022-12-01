import { GroupBy, StandingsResponseDto } from '@/types/response/standings';

type SeparateOnDivisionResult = {
  [key: string]: StandingsResponseDto[];
};

export const separateOnDivision = (
  data: StandingsResponseDto[] = [],
  groupBy: GroupBy,
): SeparateOnDivisionResult => data.reduce((acc, team) => {
    const groupKey = team[groupBy].toLocaleLowerCase();

    if (acc[groupKey]) {
      return {
        ...acc,
        [groupKey]: [
          ...acc[groupKey],
          {
            ...team,
            groupBy,
          },
        ],
      };
    }

    return {
      ...acc,
      [groupKey]: [team],
    };
  }, {} as SeparateOnDivisionResult);
