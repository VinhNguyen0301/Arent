import { TypographyOptions } from "@mui/material/styles/createTypography";
import { ThemeOption } from "../themes/index";

export interface ExtendedTypographyOptions extends TypographyOptions {
  labelMedium: React.CSSProperties;
}

const customTyporaphy = {
  labelLarge: {
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: "1.125rem",
  },
  labelMedium: {
    fontWeight: 500,
    fontSize: "0.75rem",
    lineHeight: "1rem",
  },
  labelSmall: {
    fontWeight: 500,
    fontSize: "0.625rem",
    lineHeight: "0.75rem",
  },
  headlineLarge: {
    fontWeight: 700,
    fontSize: "2rem",
    lineHeight: "2.5rem",
  },
  headlineMedium: {
    fontWeight: 700,
    fontSize: "1.75rem",
    lineHeight: "2.25rem",
  },
  headlineSmall: {
    fontWeight: 700,
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
  titleLarge: {
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: "1.25rem",
  },
  titleMedium: {
    fontSize: "0.875rem",
    fontWeight: 700,
    lineHeight: "1.5rem",
  },
  titleSmall: {
    fontSize: "0.75rem",
    fontWeight: 700,
    lineHeight: "1rem",
  },
  bodyLarge: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "2em",
  },
  bodyMedium: {
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.125rem",
  },
  bodySmall: {
    fontWeight: 300,
    fontSize: "12px",
    lineHeight: "20px",
  },
};

export const themeTypography = (theme: ThemeOption): TypographyOptions => {
  return {
    ...{
      fontFamily: theme?.fontFamily,
      h6: {
        fontWeight: 500,
        color: theme.heading,
        fontSize: "0.75rem",
      },
      h5: {
        fontSize: "0.875rem",
        color: theme.heading,
        fontWeight: 500,
      },
      h4: {
        fontSize: "1rem",
        color: theme.heading,
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.25rem",
        color: theme.heading,
        fontWeight: 600,
      },
      h2: {
        fontSize: "1.5rem",
        color: theme.heading,
        fontWeight: 700,
      },
      h1: {
        fontSize: "2.125rem",
        color: theme.heading,
        fontWeight: 700,
      },
      subtitle1: {
        fontWeight: 300,
        fontSize: "16px",
        lineHeight: "23px",
      },
      subtitle2: {
        fontSize: "0.75rem",
        fontWeight: 500,
        color: theme.colors?.textTertiary,
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
      },
      body1: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: "1.334em",
      },
      body2: {
        fontSize: "0.875rem",
        letterSpacing: "0em",
        fontWeight: 400,
        lineHeight: "1.5em",
      },
      button: {
        textTransform: "capitalize",
      },
      mainContent: {
        width: "100%",
        minHeight: "100vh",
        background: theme.background,
      },
      menuCaption: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color: theme.heading,
        padding: "6px",
        textTransform: "capitalize",
        marginTop: "10px",
      },
      subMenuCaption: {
        fontSize: "0.6875rem",
        fontWeight: 500,
        textTransform: "capitalize",
      },
      commonAvatar: {
        cursor: "pointer",
        borderRadius: "8px",
      },
      smallAvatar: {
        width: "22px",
        height: "22px",
        fontSize: "1rem",
      },
      mediumAvatar: {
        width: "34px",
        height: "34px",
        fontSize: "1.2rem",
      },
      largeAvatar: {
        width: "44px",
        height: "44px",
        fontSize: "1.5rem",
      },
      normalFont: {
        fontWeight: 300,
        fontSize: "12px",
        lineHeight: "20px",
      },
      ...customTyporaphy,
    },
  };
};
