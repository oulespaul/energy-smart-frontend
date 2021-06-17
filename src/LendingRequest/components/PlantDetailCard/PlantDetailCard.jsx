import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

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

const PlantDetailCard = (props) => {
  const classes = useStyles();
  const { plant } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          ชื่อโรงไฟฟ้าที่ต้องการทำการยืม: {plant.name}
        </Typography>

        <Divider />

        <Typography style={{ marginTop: 8 }} variant="body1">
          ที่ตั้งโรงไฟฟ้า: {plant.address}
        </Typography>

        <Typography variant="body1">
          ความจุโรงไฟฟ้า: {plant.volume_balance}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlantDetailCard;
