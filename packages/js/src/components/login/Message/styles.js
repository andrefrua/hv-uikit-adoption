const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 52,
    margin: `${theme.hv.spacing.xs}px 0`,
    padding: "5px 0"
  },
  error: {
    background: theme.hv.palette.semantic.sema9,
    paddingRight: `${theme.hv.spacing.xs}px`,
    "& > p": {
      color: theme.hv.palette.base.base2
    }
  },
  success: {
    background: theme.hv.palette.semantic.sema7,
    "& > p": {
      color: theme.hv.palette.base.base2
    }
  }
});

export default styles;
