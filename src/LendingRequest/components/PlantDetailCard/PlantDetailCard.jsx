import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "grey",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "1rem",
    color: "white",
  },
}));

const PlantDetailCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5">Lorem ipsum dolor sit amet.</Typography>

        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis dicta dolore fugit architecto iure. Ex iste consequatur dolore
          quibusdam veritatis.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlantDetailCard;
