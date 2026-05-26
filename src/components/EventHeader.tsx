import OrgIcon from '../assets/icons/OrgIcon.svg';
import HamburgerButton from './common/HamburgerButton';
import { cn } from '../utils/cn';
import '../styles/EventHeader.scss';

interface EventHeaderProps {
  isMobile?: boolean;
  onHamburgerClick?: () => void;    // Opens the responsive sidebar drawer.
}

const EventHeader = ({
  isMobile = false,
  onHamburgerClick,
}: EventHeaderProps) => (
  <header className={cn('event-header', isMobile && 'event-header--mobile')}>
    <div className="event-header__top-row">

      {/* Mobile navigation trigger */}
      {isMobile && <HamburgerButton onClick={onHamburgerClick} />}

      {/* Event branding and metadata */}
      <div className="event-header__left">
        <div className="event-header__logo-wrap">
          <img src={OrgIcon} alt="RainFocus Summit" className="event-header__logo" />
        </div>
        <div className="event-header__info">
          <h1 className="event-header__title">RainFocus Summit</h1>
          <p className="event-header__meta">December 15th</p>
          <p className="event-header__meta">Lehi, Utah</p>
        </div>
      </div>

      {/* Desktop action button */}
      {!isMobile && (
        <button type="button" className="event-header__edit-btn">
          Edit event
        </button>
      )}
    </div>

    {/* Full-width mobile CTA */}
    {isMobile && (
      <button
        type="button"
        className="event-header__edit-btn event-header__edit-btn--full"
      >
        Edit event
      </button>
    )}
  </header>
);

export default EventHeader;
