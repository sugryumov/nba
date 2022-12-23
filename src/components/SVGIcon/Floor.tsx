import { ISvgIcon } from '@/types/SVGIcon';

const Floor = ({ width, height }: ISvgIcon) => (
  <svg viewBox="0 0 540 570" width={width} height={height}>
    <g className="legend">
      <text textAnchor="end" fontFamily="Roboto" transform="translate(130 27)">
        {'Miss'}
      </text>
      <path
        d="m85 18 10 10m0-10-10 10"
        fill="rgba(255,255,255, 0.1"
        stroke="rgba(187, 0, 0, 0.8)"
        strokeWidth={3}
      />
      <text transform="translate(70 27)" textAnchor="end" fontFamily="Roboto">
        {'Made'}
      </text>
      <path
        d="M20 23a5 5 0 1 0 10 0 5 5 0 1 0-10 0"
        fill="rgba(255,255,255, 0.1"
        stroke="rgba(10, 158, 117, 0.8)"
        strokeWidth={3}
      />
    </g>
    <g className="court">
      <path fill="#f3f7fd" d="M0 30h540v510H0z" />
      <g className="markings" fill="none" stroke="#1d428a" strokeWidth={2.6}>
        <path
          className="mark"
          style={{
            strokeLinecap: 'round',
          }}
          d="M470 0v140M30 0v140M330 0v190M170 0v190M310 0v190M190 0v190M330 190H170M280 40h-60M250 40v2.5M290 40v10M210 40v10M250 42.5c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5-7.5-3.4-7.5-7.5 3.4-7.5 7.5-7.5z"
          transform="translate(20 50)"
        />
        <path
          className="mark"
          style={{
            strokeLinecap: 'round',
          }}
          d="M0 0v470h190c0-33.1 26.9-60 60-60s60 26.9 60 60h190V0H0z"
          transform="translate(20 50)"
        />
        <path
          className="mark"
          style={{
            strokeLinecap: 'round',
          }}
          d="M250 410c-33.1 0-60 26.9-60 60h40c0-11 9-20 20-20s20 9 20 20h40c0-33.1-26.9-60-60-60z"
          transform="translate(20 50)"
        />
        <path
          className="mark"
          style={{
            strokeLinecap: 'round',
          }}
          d="M250 450c-11 0-20 9-20 20h40c0-11-9-20-20-20zM310 190c0 33.1-26.9 60-60 60s-60-26.9-60-60c0 33.1 26.9 60 60 60s60-26.9 60-60z"
          transform="translate(20 50)"
        />
        <path
          className="mark"
          style={{
            strokeDasharray: '5,10',
          }}
          d="M310 190c0-33.1-26.9-60-60-60s-60 26.9-60 60c0-33.1 26.9-60 60-60s60 26.9 60 60z"
          transform="translate(20 50)"
        />
        <path
          className="mark"
          style={{
            strokeLinecap: 'round',
          }}
          d="M290 50c0 22.1-17.9 40-40 40s-40-17.9-40-40c0 22.1 17.9 40 40 40s40-17.9 40-40zM469.8 139.9c-49.7 121.4-188.3 179.6-309.7 129.9-59-24.1-105.8-70.9-129.9-129.9 49.7 121.4 188.3 179.6 309.7 129.9 59-24.1 105.8-70.9 129.9-129.9zM140 0v5M359.9 0v5M470 281.6h30M0 286.7h30"
          transform="translate(20 50)"
        />
        <path
          className="mark"
          d="M170 69.8h-10M170 79.9h-10M170 109.9h-10M170 140h-10M340 69.8h-10M340 79.9h-10M340 109.9h-10"
          transform="translate(20 50)"
        />
        <path className="mark" d="M20 190h30M490 189.9h30" />
      </g>
      <g className="shot" transform="translate(20 50)">
        <title>{'Antetokounmpo, Giannis - Q1 11:44'}</title>
        <path
          d="M239 66a5 5 0 1 0 10 0 5 5 0 1 0-10 0"
          fill="rgba(255,255,255, 0.1"
          stroke="rgba(10, 158, 117, 0.8)"
          strokeWidth={3}
        />
      </g>
      <g className="shot" transform="translate(20 50)">
        <title>{'Antetokounmpo, Giannis - Q1 0:23'}</title>
        <path
          d="M124 223a5 5 0 1 0 10 0 5 5 0 1 0-10 0"
          fill="rgba(255,255,255, 0.1"
          stroke="rgba(10, 158, 117, 0.8)"
          strokeWidth={3}
        />
      </g>
      <g className="shot" transform="translate(20 50)">
        <title>{'Antetokounmpo, Giannis - Q2 7:40'}</title>
        <path
          d="M213 117a5 5 0 1 0 10 0 5 5 0 1 0-10 0"
          fill="rgba(255,255,255, 0.1"
          stroke="rgba(10, 158, 117, 0.8)"
          strokeWidth={3}
        />
      </g>
      <g className="shot" transform="translate(20 50)">
        <title>{'Antetokounmpo, Giannis - Q4 11:36'}</title>
        <path
          d="M381 61a5 5 0 1 0 10 0 5 5 0 1 0-10 0"
          fill="rgba(255,255,255, 0.1"
          stroke="rgba(10, 158, 117, 0.8)"
          strokeWidth={3}
        />
      </g>
      <g className="shot" transform="translate(20 50)">
        <title>{'Antetokounmpo, Giannis - Q4 2:52'}</title>
        <path
          d="M124 59a5 5 0 1 0 10 0 5 5 0 1 0-10 0"
          fill="rgba(255,255,255, 0.1"
          stroke="rgba(10, 158, 117, 0.8)"
          strokeWidth={3}
        />
      </g>
    </g>
  </svg>
);

export default Floor;
