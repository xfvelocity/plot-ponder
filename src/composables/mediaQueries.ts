import { useState, useEffect } from "react";

interface MediaQueries {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface UseMediaQuery {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isExtraLarge: boolean;
}

const isMatchingWidth = (
  minWidth: keyof MediaQueries,
  maxWidth?: keyof MediaQueries
): boolean => {
  const mediaQueries: MediaQueries = {
    sm: 500,
    md: 768,
    lg: 1024,
    xl: 1366,
  };

  if (maxWidth) {
    return window.matchMedia(
      `(min-width:${mediaQueries[minWidth]}px) and (max-width:${mediaQueries[maxWidth]}px)`
    ).matches;
  } else {
    return window.matchMedia(`(min-width:${mediaQueries[minWidth]}px)`).matches;
  }
};

export const useMediaQuery = (): UseMediaQuery => {
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [isExtraLarge, setIsExtraLarge] = useState(false);

  const setSizes = (): void => {
    setIsSmall(isMatchingWidth("sm"));
    setIsMedium(isMatchingWidth("md"));
    setIsLarge(isMatchingWidth("lg"));
    setIsExtraLarge(isMatchingWidth("xl"));
  };

  useEffect(() => {
    setSizes();

    window.addEventListener("resize", setSizes);
  });

  return {
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
  };
};
