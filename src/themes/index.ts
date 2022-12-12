import { createTheme, ThemeOptions } from "@mui/material/styles";
import colors from "assets/scss/_themes-vars.module.scss";
import componentStyleOverrides from "../themes/compStyleOverride";
import themePalette from "../themes/palette";
import { themeTypography } from "../themes/typography";

export type ThemeOption = {
  colors: {
    readonly [key: string]: string;
  };
  heading: string;
  paper: string;
  backgroundLight: string;
  backgroundDefault: string;
  background: string;
  divider: string;
  fontFamily: string;
  borderRadius: number;
  spacingDefault: number;
};
const color = colors;

export const theme = () => {
  const color = colors;

  const themeOption: ThemeOption = {
    colors: color,
    heading: color.grey1000,
    paper: color.paper,
    backgroundLight: color.backgroundLight,
    backgroundDefault: color.background,
    background: color.background,
    divider: color.divider,
    fontFamily: `'Gotham', sans-serif`,
    borderRadius: 8,
    spacingDefault: 8,
  };

  const themeOptions: ThemeOptions = {
    direction: "ltr",
    palette: themePalette(themeOption),
    typography: themeTypography(themeOption),
    breakpoints: {
      values: {
        xs: 495,
        sm: 689,
        md: 992,
        lg: 1200,
        xl: 1536,
      },
    },
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
