import { Components } from "@mui/material";
import {
  DEFAULT_ZINDEX_OF_POPPER,
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
} from "../constants/common";
import { ThemeOption } from "../themes/index";
// import { getCtaButtonStyles, getLabelPlacementStyles } from './style-overrides'

export default function componentStyleOverrides(
  theme: ThemeOption
): Components {
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontWeight: 500,
          borderRadius: `${theme?.borderRadius}px`,
          boxShadow: "none",
          height: "100%",
          transition: "all .2s ease-in-out",
          textTransform: "initial",
          ...ownerState,
        }),
        sizeSmall: {
          height: SIZE_SMALL,
        },
        sizeMedium: {
          height: SIZE_MEDIUM,
        },
        sizeLarge: {
          height: SIZE_LARGE,
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: `${theme?.borderRadius}px`,
          background: theme.colors?.primary800,
          "& .MuiToggleButtonGroup-grouped:not(:last-of-type)": {
            borderRight: "1px solid white",
          },
        },
        grouped: {
          width: "100%",
          border: "none",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          justifyContent: "left",
          borderRadius: `${theme?.borderRadius}px`,
          padding: "12px 16px",
        },
        primary: {
          background: theme.colors?.primaryLight,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          borderRadius: `${theme?.borderRadius}px`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.colors?.textDark,
          padding: "24px",
        },
        title: {
          fontSize: "1.125rem",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: "12px",
          border: "none",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          // borderRadius: `${theme?.borderRadius}px`,
          flexGrow: 1,
          transition: "all 1000ms linear",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "8px !important",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: theme.colors?.grey300,
          },
        },
        mark: {
          backgroundColor: theme.paper,
          width: "4px",
        },
        valueLabel: {
          color: theme?.colors?.primaryLight,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.colors?.invertedTextMain,
          opacity: 1,
        },
        light: {
          borderColor: theme.colors?.divider,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: "white",
          background: theme.colors?.primaryMain,
          fontWeight: 700,
          fontSize: 14,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "max-content",
          "&.MuiChip-deletable .MuiChip-deleteIcon": {
            color: "inherit",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.paper,
          background: theme.colors?.grey700,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            color: theme.colors?.textSecondary,
            fontWeight: 500,
            borderColor: "white",
            background: theme.colors?.supportingPrimaryLight,

            "&:first-of-type": {
              borderLeftColor: theme.colors?.grey200,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderLeft: "1px solid",
          borderColor: theme.colors?.grey200,

          "&:first-of-type": {
            borderLeft: 0,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.colors?.textPrimary,
          fontWeight: 400,
          minHeight: SIZE_MEDIUM,
          "&.Mui-selected": {
            fontWeight: 500,
            borderRadius: `${theme.borderRadius}px ${theme.borderRadius}px 0 0`,
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        bar1Determinate: {
          borderRadius: 4,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          backgroundColor: theme.colors?.errorExtraLight,
          border: `1px solid ${theme.colors?.errorMain}`,
          "& .MuiAlert-icon": {
            color: theme.colors?.errorMain,
          },
          "& .MuiTypography-root": {
            color: theme.colors?.errorDark,
            fontWeight: 700,
          },
        },
        standardSuccess: {
          backgroundColor: theme.colors?.successExtraLight,
          border: `1px solid ${theme.colors?.successMain}`,
          "& .MuiAlert-icon": {
            color: theme.colors?.successMain,
          },
          "& .MuiTypography-root": {
            color: theme.colors?.successDark,
            fontWeight: 700,
          },
        },
        standardInfo: {
          backgroundColor: theme.colors?.infoExtraLight,
          border: `1px solid ${theme.colors?.infoMain}`,
          "& .MuiAlert-icon": {
            color: theme.colors?.infoMain,
          },
          "& .MuiTypography-root": {
            color: theme.colors?.infoDark,
            fontWeight: 700,
          },
        },
        standardWarning: {
          backgroundColor: theme.colors?.warningExtraLight,
          border: `1px solid ${theme.colors?.warningMain}`,
          "& .MuiAlert-icon": {
            color: theme.colors?.warningMain,
          },
          "& .MuiTypography-root": {
            color: theme.colors?.warningDark,
            fontWeight: 700,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
    // MuiFormControlLabel: {
    //   styleOverrides: {
    //     root: ({ ownerState }) => ({
    //       ...(ownerState.label && getLabelPlacementStyles(theme, ownerState.labelPlacement)),
    //       ...(!ownerState.label && {
    //         marginLeft: 0,
    //         marginRight: 0,
    //       }),
    //     }),
    //   },
    // },
    MuiPopper: {
      defaultProps: {
        sx: {
          zIndex: DEFAULT_ZINDEX_OF_POPPER,
          // boxShadow: theme.colors.shadowPopup,
          // background: theme.colors.paper,
          // borderRadius: theme.borderRadius,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          zIndex: DEFAULT_ZINDEX_OF_POPPER,
          borderRadius: theme.borderRadius,
          marginBottom: "4px",
          "&:hover": {
            "svg,span,p": {
              color: theme.colors.primaryMain,
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: SIZE_MEDIUM,
          "& input": {
            padding: "9px 14px",
          },
        },
        multiline: {
          height: "max-content !important",
        },
        adornedStart: {
          "& svg": {},
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        multiline: false,
      },
      styleOverrides: {
        root: {
          background: theme.colors.paper,
          borderRadius: theme.borderRadius,
          // '& input': {
          //   padding: '9px 14px',
          // },
          "& input::placeholder": {
            color: theme.colors.textTertiary,
            fontSize: "13px",
            fontWeight: 400,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
            borderColor: theme.colors.border,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
            borderColor: theme.colors.primaryLight,
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.colors.primaryLight,
            },
          },
        },
        sizeSmall: {
          height: SIZE_SMALL,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          color: theme.colors.primaryMain,
          height: "100%",
          paddingTop: 0,
          paddingBottom: 0,
          display: "flex",
          alignItems: "center",
        },
        icon: {
          marginLeft: 20,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiChip-root": {
            height: "max-content",
            color: theme.colors.secondaryMain,
            backgroundColor: theme.colors.rbgaSecondaryLight,
            "& svg": {
              fontSize: "16px",
            },
          },
        },
        hasClearIcon: {
          "& .MuiOutlinedInput-input": {
            color: theme.colors.primaryMain,
          },
          "& .MuiOutlinedInput-root": {},
        },
        listbox: {
          background: theme.colors.backgroundLight,
          padding: "12px",
        },
        option: {
          padding: "8px",
        },
        inputRoot: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: "4px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "4px",
        },
      },
    },
  };
}
