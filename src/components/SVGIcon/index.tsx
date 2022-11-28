import { ISvgIcon } from '@/types/SVGIcon';
import { TEAMS } from '@/constants/teams';
import {
  NBA,
  ATL,
  BKN,
  BOS,
  CHA,
  CHI,
  CLE,
  DAL,
  DEN,
  DET,
  GSW,
  HOU,
  IND,
  LAC,
  LAL,
  MEM,
  MIA,
  MIL,
  MIN,
  NOP,
  NYK,
  OKC,
  ORL,
  PHI,
  PHX,
  POR,
  SAC,
  SAS,
  TOR,
  UTA,
  WAS,
} from './NBATeam';

const getPath = (name: string, props: ISvgIcon) => {
  switch (name) {
    case TEAMS.ATL:
      return <ATL {...props} />;

    case TEAMS.BKN:
      return <BKN {...props} />;

    case TEAMS.BOS:
      return <BOS {...props} />;

    case TEAMS.CHA:
      return <CHA {...props} />;

    case TEAMS.CHI:
      return <CHI {...props} />;

    case TEAMS.CLE:
      return <CLE {...props} />;

    case TEAMS.DAL:
      return <DAL {...props} />;

    case TEAMS.DEN:
      return <DEN {...props} />;

    case TEAMS.DET:
      return <DET {...props} />;

    case TEAMS.GSW:
      return <GSW {...props} />;

    case TEAMS.HOU:
      return <HOU {...props} />;

    case TEAMS.IND:
      return <IND {...props} />;

    case TEAMS.LAC:
      return <LAC {...props} />;

    case TEAMS.LAL:
      return <LAL {...props} />;

    case TEAMS.MEM:
      return <MEM {...props} />;

    case TEAMS.MIA:
      return <MIA {...props} />;

    case TEAMS.MIL:
      return <MIL {...props} />;

    case TEAMS.MIN:
      return <MIN {...props} />;

    case TEAMS.NOP:
      return <NOP {...props} />;

    case TEAMS.NYK:
      return <NYK {...props} />;

    case TEAMS.OKC:
      return <OKC {...props} />;

    case TEAMS.ORL:
      return <ORL {...props} />;

    case TEAMS.PHI:
      return <PHI {...props} />;

    case TEAMS.PHX:
      return <PHX {...props} />;

    case TEAMS.POR:
      return <POR {...props} />;

    case TEAMS.SAC:
      return <SAC {...props} />;

    case TEAMS.SAS:
      return <SAS {...props} />;

    case TEAMS.TOR:
      return <TOR {...props} />;

    case TEAMS.UTA:
      return <UTA {...props} />;

    case TEAMS.WAS:
      return <WAS {...props} />;

    default:
      return <NBA {...props} />;
  }
};

const SVGIcon = ({ name = '', width = '100%', height = '100%' }: ISvgIcon) =>
  getPath(name, { width, height });

export default SVGIcon;
