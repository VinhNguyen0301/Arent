/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

import { ThemeOption } from "../themes/index";

export default function themePalette(theme: ThemeOption) {
  return {
    common: {
      black: theme.colors?.darkPaper,
    },
    primary: {
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark,
    },
    supportingPrimary: {
      extraLight: theme.colors?.supportingPrimaryExtraLight,
      light: theme.colors?.supportingPrimaryLight,
      main: theme.colors?.supportingPrimaryMain,
      dark: theme.colors?.supportingPrimaryDark,
    },
    secondary: {
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark,
    },
    success: {
      extraLight: theme.colors?.successExtraLight,
      light: theme.colors?.successLight,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark,
    },
    error: {
      extraLight: theme.colors?.errorExtraLight,
      light: theme.colors?.errorLight,
      main: theme.colors?.errorMain,
      dark: theme.colors?.errorDark,
    },
    warning: {
      extraLight: theme.colors?.warningExtraLight,
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark,
    },
    info: {
      extraLight: theme.colors?.infoExtraLight,
      light: theme.colors?.infoLight,
      main: theme.colors?.infoMain,
      dark: theme.colors?.infoDark,
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      200: theme.colors?.grey200,
      300: theme.colors?.grey300,
      500: theme.colors?.grey500,
      600: theme.colors?.grey600,
      700: theme.colors?.grey700,
      900: theme.colors?.grey900,
      1000: theme.colors?.grey1000,
    },
    lightGrey: {
      light: theme.colors?.lightGreyLight,
      main: theme.colors?.lightGreyMain,
      dark: theme.colors?.lightGreyDark,
    },
    darkGrey: {
      light: theme.colors?.darkGreyLight,
      main: theme.colors?.darkGreyMain,
      dark: theme.colors?.darkGreyDark,
    },
    text: {
      primary: theme.colors?.textPrimary,
      secondary: theme.colors?.textSecondary,
      tertiary: theme.colors?.textTertiary,
      inverted: {
        light: theme.colors?.invertedTextLight,
        main: theme.colors?.invertedTextMain,
        dark: theme.colors?.invertedTextDark,
      },
    },
    background: {
      light: theme.backgroundLight,
      paper: theme.paper,
      default: theme.backgroundDefault,
    },
    rbga: {
      leftContainer: theme.colors.rgbaLeftContainer,
      rightContainer: theme.colors.rgbaRightContainer,
    },
    shadow: {
      popup: theme.colors.shadowPopup,
    },
    border: theme.colors.border,
  };
}
