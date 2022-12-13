type TVideoUrls = {
  ldur: number;
  lth: string;
  lurl: string;
  mdur: string;
  mth: string;
  murl: string;
  scc: string;
  sdur: string;
  srt: string;
  sth: string;
  surl: string;
  uuid: string;
  vtt: string;
};

type TMeta = {
  videoUrls: TVideoUrls[];
};

type TPlaylist = {
  d: string;
  dsc: string;
  ei: number;
  gc: string;
  gi: string;
  ha: string;
  hid: number;
  hpa: number;
  hpb: number;
  m: string;
  p: number;
  pta: number;
  va: string;
  vid: number;
  vpa: number;
  vpb: number;
  y: number;
};

export type VideoEventResponse = {
  Meta: TMeta;
  playlist: TPlaylist[];
};

export type VideoEventResponseDto = {
  videoUrl: string;
  videoPoster: string;
};
