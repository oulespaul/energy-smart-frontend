import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  heroSection: {
    padding: "32px 0",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    backgroundColor: "#f7f7f7",
  },
  paper: {
    maxHeight: "500px",
    overflow: "auto",
    backgroundColor: "#f7f7f7",
    marginTop: "8px",
  },
  heroCard: {
    backgroundColor: "#f7f7f7",
    marginTop: "16px",
  },
  listSection: {
    paddingBottom: "16px",
  },
}));
