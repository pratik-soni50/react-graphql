import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        marginBottom: 8,
        marginTop: 8,
      }
    },
    MuiButton: {
      root: {
        marginTop: 8,
        marginBottom: 8,
      },
      label: {
        textTransform: 'none',
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRightWidth: 0,
      },
    },
    MuiAvatar: {
      root: {
        textTransform: 'capitalize',
      }
    },
  },
  props: {
    MuiTextField: {
      fullWidth: true,
      variant: "outlined",
      size: "small",
    },
    MuiButton: {
      color: "primary",
      variant: "outlined",
    },
    MuiPaper: {
      elevation: 0,
      square: true,
    },
    MuiCard: {
      elevation: 0,
    },
  },
});

export default theme;
