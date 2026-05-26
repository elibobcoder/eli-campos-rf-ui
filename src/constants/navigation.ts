
/** Navigation structure for sidebar and bottom nav. */

export const PRIMARY_NAV_ITEMS = [
  { id: 'guide', label: 'Guide', hasChildren: false },
  {
    id: 'attendees',
    label: 'Attendees',
    hasChildren: true,

    // Sub-navigation used for expanded sidebar states.
    children: [
      'Attendees',
      'Attendee types',
      'Packages',
      'Reg codes',
      'Discounts',
    ],
  },
  { id: 'content', label: 'Content', hasChildren: false },
  { id: 'exhibitors', label: 'Exhibitors', hasChildren: false },
] as const;

// Union type derived directly from config to prevent drift between UI and state.
export type NavId = (typeof PRIMARY_NAV_ITEMS)[number]['id'];

// Default landing section when app loads.
export const DEFAULT_NAV_ID: NavId = 'attendees';
