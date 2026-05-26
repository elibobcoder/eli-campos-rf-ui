import { BREAKPOINTS } from '../constants/breakpoints';
import { useWindowWidth } from './useWindowWidth';

/** Derives responsive layout state from current window width. */

export function useBreakpoints() {
  const width = useWindowWidth();
  const isDesktop = width >= BREAKPOINTS.desktop;
  const isTablet = width >= BREAKPOINTS.tablet && !isDesktop;
  const isMobile = width < BREAKPOINTS.tablet;

  return { width, isDesktop, isTablet, isMobile };
}
