import type { NavId } from '../constants/navigation';
import { cn } from '../utils/cn';
import LeftSideBar from './Sidebar/LeftSideBar';
import RightSideBar from './Sidebar/RightSideBar';
import '../styles/Sidebar.scss';

interface SidebarProps {
  activeNav: NavId;
  onNavChange: (id: NavId) => void;
  isTablet?: boolean;      // Enables tablet-specific compact sidebar behavior.
  drawer?: boolean;        // Enables drawer mode for responsive layouts.
  drawerOpen?: boolean;    // Controls drawer visibility state.
  onHamburgerClick?: () => void;    // Triggered from the hamburger menu button.
}

const Sidebar = ({
  activeNav,
  onNavChange,
  isTablet = false,
  drawer = false,
  drawerOpen = false,
  onHamburgerClick,
}: SidebarProps) => {

  // Determines when the expanded navigation panel should be visible.
  const showRightPanel =
    (!isTablet && !drawer) ||
    (isTablet && drawerOpen) ||
    (!isTablet && drawer);

  return (
    <aside
      className={cn(
        'sidebar',
        // Tablet layout keeps only the icon rail visible by default.
        isTablet && 'sidebar--icon-only',
        // Drawer modifiers for responsive sidebar behavior.
        !isTablet && drawer && 'sidebar--drawer',
        !isTablet && drawer && drawerOpen && 'sidebar--drawer-open',
        // Expands the full sidebar on tablet when opened.
        isTablet && drawerOpen && 'sidebar--tablet-open',
      )}
    >
      <LeftSideBar
        isTablet={isTablet}
        onHamburgerClick={onHamburgerClick}
      />

      {/* Conditionally render the expandable navigation panel */}
      {showRightPanel && (
        <RightSideBar
          activeNav={activeNav}
          onNavChange={onNavChange}
        />
      )}
    </aside>
  );
};

export default Sidebar;
