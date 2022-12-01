import { GroupBy } from '@/types/response/standings';

export const GROUP_BY: { [key: string]: GroupBy } = {
  CONFERENCE: 'conference',
  DIVISION: 'division',
};

export const CONFERENCE_DIVISION_NAME: { [key: string]: string } = {
  east: 'Eastern Conference',
  west: 'Western Conference',
  atlantic: 'Atlantic Division',
  central: 'Central Division',
  southeast: 'Southeast Division',
  northwest: 'Northwest Division',
  pacific: 'Pacific Division',
  southwest: 'Southwest Division',
};
