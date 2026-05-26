import LogoIcon from '../../assets/icons/LogoIcon.svg';
import OrgIcon from '../../assets/icons/OrgIcon.svg';
import HamburgerButton from '../common/HamburgerButton';

interface LeftSideBarProps {
  isTablet: boolean;
  onHamburgerClick?: () => void;
}

const LeftSideBar = ({ isTablet, onHamburgerClick }: LeftSideBarProps) => (
  <div className="sidebar__left">
    <div className="sidebar__left-top">

      {/* Hamburger (Tablet only) */}
      {isTablet && <HamburgerButton onClick={onHamburgerClick} />}

      {/* Application Logo */}
      <div className="sidebar__nav-logo">
        <img src={LogoIcon} alt="Nav-Logo" className="sidebar__nav-logo-small" />
      </div>

      {/* Organization Icon */}
      <div className="sidebar__nav-org">
        <img src={OrgIcon} alt="Nav-Org" className="sidebar__nav-org-icon" />
      </div>
    </div>

    {/* User avatar */}
    <div className="sidebar__left-bottom">
      <div className="sidebar__avatar">FL</div>
    </div>
  </div>
);

export default LeftSideBar;
