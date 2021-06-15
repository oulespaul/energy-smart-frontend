import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    justifyContent: "end",
  },
  contentMargin: {
    marginTop: "8px",
  },
}));
