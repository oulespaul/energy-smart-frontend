import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "32px",
    padding: "16px",
  },
  cardActions: {
    justifyContent: "end",
    marginTop: "8px",
  },
}));

const RequestLendingCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5">โรงพลังงานไฟฟ้า</Typography>

        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iste
          similique dolore reiciendis suscipit esse, molestias repellendus in
          tempora asperiores tempore quasi alias libero obcaecati error. Ab
          ipsam ipsum illo.
        </Typography>
      </CardContent>

      <Divider />

      <CardActions className={classes.cardActions}>
        <Button size="small" variant="contained" color="primary">
          ยื่นข้อเสนอ
        </Button>
      </CardActions>
    </Card>
  );
};

export default RequestLendingCard;
