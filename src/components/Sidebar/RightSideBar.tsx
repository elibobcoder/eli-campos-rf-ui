import { PRIMARY_NAV_ITEMS, type NavId } from '../../constants/navigation';
import { cn } from '../../utils/cn';

interface RightSideBarProps {
  activeNav: NavId;
  onNavChange: (id: NavId) => void;
}

/** Search input for filtering navigation */

function SearchField() {
  return (
    <div className="sidebar__search">
      <svg className="sidebar__search-icon" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M10.5 10.5L13 13"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <input type="text" placeholder="Search" className="sidebar__search-input" />
    </div>
  );
}

interface MegaNavItemProps {
  id: NavId;
  label: string;
  isActive: boolean;
  hasChildren: boolean;
  children?: readonly string[];
  onNavChange: (id: NavId) => void;
}


/**
 * Renders a primary navigation item with optional nested sub-navigation.
 *
 * Handles:
 * - Active state styling
 * - Expand/collapse of child navigation
 * - Propagation of navigation changes to parent state
 */
function MegaNavItem({
  id,
  label,
  isActive,
  hasChildren,
  children,
  onNavChange,
}: MegaNavItemProps) {
  return (
    <div className="sidebar__mega-nav-group">
      <button
        type="button"
        className={cn('sidebar__mega-nav-item', isActive && 'sidebar__mega-nav-item--active')}
        onClick={() => onNavChange(id)}
      >
        <span
          className={cn('sidebar__mega-nav-dot', isActive && 'sidebar__mega-nav-dot--active')}
        />
        <span className="sidebar__mega-nav-label">{label}</span>
      </button>

      {/* Render secondary navigation only for active parent item */}
      {isActive && hasChildren && children && (
        <ul className="sidebar__subnav">
          {children.map((child) => (
            <li key={child}>
              <button
                type="button"
                className={cn(
                  'sidebar__subnav-item',
                  // Static selection placeholder (can be extended to real routing/state)
                  child === 'Attendees' && 'sidebar__subnav-item--selected',
                )}
              >
                {child}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const RightSideBar = ({ activeNav, onNavChange }: RightSideBarProps) => (
  <div className="sidebar__right">
    <div className="sidebar__header">
      <span className="sidebar__header-text">RainFocus Summit</span>
      <span className="sidebar__header-detail">Lehi, UT • December 15th</span>
    </div>

    {/* Navigation search (currently UI-only) */}
    <SearchField />

    {/* Primary + secondary navigation */}
    <nav className="sidebar__mega-nav" aria-label="Event navigation">
      {PRIMARY_NAV_ITEMS.map((item) => (
        <MegaNavItem
          key={item.id}
          id={item.id}
          label={item.label}
          isActive={activeNav === item.id}
          hasChildren={item.hasChildren}
          children={'children' in item ? item.children : undefined}
          onNavChange={onNavChange}
        />
      ))}
    </nav>
  </div>
);

export default RightSideBar;
