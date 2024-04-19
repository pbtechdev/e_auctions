import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

const Button = (theme) => {
  return {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          letterSpacing: '0.075rem',
          '&:hover': {
            boxShadow: "none",
          },
          borderRadius: '3rem',
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z24,
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.z24,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
};

export default Button;
