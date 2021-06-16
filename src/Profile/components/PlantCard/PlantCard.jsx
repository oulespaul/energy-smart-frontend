import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  cardMedia: {
    paddingTop: "42.85%",
  },
  plantCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

const PlantCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.plantCard}>
      <CardMedia
        image="https://source.unsplash.com/random"
        className={classes.cardMedia}
      />

      <CardContent>
        <Typography variant="body1">ชื่อโรงพลังงานไฟฟ้า</Typography>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
