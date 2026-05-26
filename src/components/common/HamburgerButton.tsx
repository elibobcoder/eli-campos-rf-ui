interface HamburgerButtonProps {
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;    // Accessibility label for screen readers.
}

const HamburgerButton = ({
  className = 'event-header__hamburger',
  onClick,
  'aria-label': ariaLabel = 'Open menu',
}: HamburgerButtonProps) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {/* Decorative hamburger icon */}
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M3 5h14M3 10h14M3 15h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </button>
);

export default HamburgerButton;
