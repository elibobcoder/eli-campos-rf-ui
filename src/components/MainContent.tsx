import EventHeader from './EventHeader';
import SetupGuide from './SetupGuide';
import '../styles/MainContent.scss';

interface MainContentProps {
  isMobile?: boolean;
  onHamburgerClick?: () => void;    // Opens the responsive sidebar drawer.
}

const MainContent = ({
  isMobile = false,
  onHamburgerClick,
}: MainContentProps) => (
  <main className="main-content">

    {/* Top event header/navigation area */}
    <EventHeader
      isMobile={isMobile}
      onHamburgerClick={onHamburgerClick}
    />

    {/* Primary page content */}
    <div className="main-content__body">
      <SetupGuide isMobile={isMobile} />
    </div>
  </main>
);

export default MainContent;
