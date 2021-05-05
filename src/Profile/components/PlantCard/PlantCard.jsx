import { useState } from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
  const [isActive, setIsActive] = useState(true);

  const handleChange = (event) => {
    setIsActive(event.target.checked);
  };

  return (
    <Card className={classes.plantCard}>
      <CardMedia
        image="https://source.unsplash.com/random"
        className={classes.cardMedia}
      />

      <CardContent>
        <Grid container justify="space-between">
          <Typography variant="title">ชื่อโรงพลังงานไฟฟ้า</Typography>

          <Switch
            checked={isActive}
            onChange={handleChange}
            color="primary"
            name="switch"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
