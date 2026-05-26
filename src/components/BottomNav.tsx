import { PRIMARY_NAV_ITEMS, type NavId } from '../constants/navigation';
import {
  GuideNavIcon,
  AttendeesNavIcon,
  ContentNavIcon,
  ExhibitorsNavIcon,
} from './SvgIcon';
import { cn } from '../utils/cn';
import '../styles/BottomNav.scss';

const NAV_ICONS = {
  guide: GuideNavIcon,
  attendees: AttendeesNavIcon,
  content: ContentNavIcon,
  exhibitors: ExhibitorsNavIcon,
} as const;

interface BottomNavProps {
  activeNav: NavId;
  onNavChange: (id: NavId) => void;     // Updates active navigation state.
}

const BottomNav = ({ activeNav, onNavChange }: BottomNavProps) => (
  <nav className="bottom-nav" aria-label="Main navigation">
    {PRIMARY_NAV_ITEMS.map(({ id, label }) => {
      // Determines active navigation styling/state.
      const active = activeNav === id;

      // Dynamically resolves the matching nav icon component.
      const Icon = NAV_ICONS[id];

      return (
        <button
          key={id}
          type="button"
          className={cn('bottom-nav__item', active && 'bottom-nav__item--active')}
          onClick={() => onNavChange(id)}
          aria-label={label}
          aria-current={active ? 'page' : undefined}
        >
          <span className="bottom-nav__icon">
            <Icon active={active} />
          </span>
          <span className="bottom-nav__label">{label}</span>
        </button>
      );
    })}
  </nav>
);

export default BottomNav;
