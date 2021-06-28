import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Autorenew from "@material-ui/icons/Autorenew";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  cardMedia: {
    paddingTop: "42.85%",
  },
  plantCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  requestButton: {
    color: "#9abba8",
  },
  link: {
    textDecorator: "none",
    color: "inherit",
  },
}));

const PlantCard = (props) => {
  const classes = useStyles();
  const { plant } = props;

  return (
    <Card className={classes.plantCard}>
      <CardMedia image={plant.imageUrl} className={classes.cardMedia} />

      <CardContent>
        <Grid container justify="space-between">
          <Typography variant="body1">
            ชื่อโรงพลังงานไฟฟ้า: {plant.name}
          </Typography>

          <Typography variant="overline">
            ความจุไฟฟ้า: {plant.volume_balance}
          </Typography>

          <IconButton
            variant="contained"
            size="small"
            className={classes.requestButton}
          >
            <Link
              className={classes.link}
              to={`/app/lending-request/${plant.id}`}
            >
              <Autorenew />
            </Link>
          </IconButton>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
