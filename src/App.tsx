import { useCallback, useState } from 'react';
import { DEFAULT_NAV_ID, type NavId } from './constants/navigation';
import { useBreakpoints } from './hooks/useBreakpoints';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import BottomNav from './components/BottomNav';
import './styles/App.scss';

const App = () => {
  // Stores the currently selected navigation item.
  const [activeNav, setActiveNav] = useState<NavId>(DEFAULT_NAV_ID);

  // Controls sidebar drawer visibility on tablet/mobile.
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Centralized responsive breakpoint state.
  const { isDesktop, isTablet, isMobile } = useBreakpoints();

  // Memoized handlers prevent unnecessary child re-renders.
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  // Closes the drawer after navigation selection on smaller screens.
  const handleDrawerNavChange = useCallback((nav: NavId) => {
    setActiveNav(nav);
    setDrawerOpen(false);
  }, []);

  return (
    <div className="rf-ui">

      {/* Persistent desktop sidebar */}
      {isDesktop && (
        <Sidebar
          activeNav={activeNav}
          onNavChange={setActiveNav}
        />
      )}

      {/* Drawer-based navigation for tablet/mobile */}
      {(isTablet || isMobile) && (
        <>
          {drawerOpen && (
            <div
              className="drawer-overlay"
              onClick={closeDrawer}
              role="presentation"
            />
          )}
          <Sidebar
            activeNav={activeNav}
            onNavChange={handleDrawerNavChange}
            onHamburgerClick={openDrawer}
            isTablet={isTablet}
            drawer
            drawerOpen={drawerOpen}
          />
        </>
      )}

      {/* Main page content */}
      <MainContent
        isMobile={isMobile}
        onHamburgerClick={openDrawer}
      />

      {/* Mobile bottom navigation */}
      {isMobile && (
        <BottomNav
          activeNav={activeNav}
          onNavChange={setActiveNav}
        />
      )}
    </div>
  );
};

export default App;
