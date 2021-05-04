import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "white",
    padding: "20px",
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "20px",
  },
  cardGrid: {
    padding: "20px 0",
  },
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
  footer: {
    backgroundColor: "white",
    padding: "50px 0",
    textAlign: "center",
  },
}));

export default useStyles;
