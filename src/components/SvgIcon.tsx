interface NavIconProps {
  active: boolean;
}

/** Active theme colors for navigation icons. */
const ACTIVE_STROKE = '#6c3fbd';
const ACTIVE_FILL = '#ede9f9';

/** Resolves stroke/fill colors based on active state. */
function navColors(active: boolean) {
  return {
    stroke: active ? ACTIVE_STROKE : 'currentColor',
    fill: active ? ACTIVE_FILL : 'none',
  };
}

/** Guide navigation icon. */
export const GuideNavIcon = ({ active }: NavIconProps) => {
  const { stroke, fill } = navColors(active);
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M4 3h9l5 5v11a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill={fill}
      />
      <path d="M13 3v5h5" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 12h8M7 15.5h5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
};

/** Attendees navigation icon. */
export const AttendeesNavIcon = ({ active }: NavIconProps) => {
  const { stroke, fill } = navColors(active);
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="8" cy="7" r="3" stroke={stroke} fill={fill} strokeWidth="1.5" />
      <path d="M2 19c0-3.314 2.686-6 6-6h1" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="15" cy="9" r="2.5" stroke={stroke} fill={fill} strokeWidth="1.5" />
      <path d="M11 19c0-2.761 2.239-5 5-5h1" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

/** Content navigation icon. */
export const ContentNavIcon = ({ active }: NavIconProps) => {
  const { stroke, fill } = navColors(active);
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="3" y="3" width="16" height="16" rx="2" stroke={stroke} fill={fill} strokeWidth="1.5" />
      <path d="M7 8h8M7 11.5h8M7 15h5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
};

/** Exhibitors navigation icon. */
export const ExhibitorsNavIcon = ({ active }: NavIconProps) => {
  const { stroke, fill } = navColors(active);
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M3 9l8-6 8 6v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9z"
        stroke={stroke}
        fill={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 20v-6h4v6"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
